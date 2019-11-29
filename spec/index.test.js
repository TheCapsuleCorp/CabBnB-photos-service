const expect = require('chai').expect;

const db = require('../db/');
const fs = require('fs');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const path = require('path');
const request = require('supertest');

const Photos = db.Photos;

const mockData =   {
    url: 'https://cap-bnb-photo-service.s3.us-east-2.amazonaws.com/1-stream-belmont-3.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    roomId: 4160333
  };

describe('Database Tests with Server', () => {
  const app = require('../server/server.js');
  let agent, memMongo, server;
  beforeAll(async (done) => {
    jest.setTimeout(10000);

    memMongo = await new MongoMemoryServer();
    process.env.MONGODB_URI = await memMongo.getConnectionString();
    db.connect();

    await Photos.deleteMany();
    await Photos.create(mockData);
    await Photos.create(mockData);

    server = await app.listen(4000, (err) => {
      if (err) {
       return done(err);
      }

      agent = request.agent(server); // since the application is already listening, it should use the allocated port
      done();
    });
  });

  afterAll(async function(done){
    await mongoose.disconnect();
    return server && await server.close(done);
  });

  test('Should retrieve the correct document from the database based on roomID', function(done) {
    Photos.find({roomId: 4160333}, (err, data) => {
      if (err) { throw err; }
      expect(data[0].description).to.equal('Lorem ipsum dolor sit amet, consectetur adipiscing elit');
      done();
    });
  });

  test('Should correct amount of photo records from DB on GET requests to /api/rooms/:roomId/', async () => {
    const res = await request(server).get('/api/rooms/4160333/photos');
    expect(res.body[0].roomId).to.equal(4160333);
    expect(res.body.length).to.equal(2);
    expect(res.statusCode).to.equal(200);
  });

  test('Should respond with an error to invalid paths', async () => {
    const res = await request(server).get('/stays');
    expect(res.statusCode).to.equal(404);
  });

  test('Should respond with a 405 Method Not Allowed to POST requests to /api/rooms/:roomId/', async () => {
    const res = await request(server).post('/api/rooms/4160333/photos');
    expect(res.statusCode).to.equal(405);
  });

  test('Should respond with a 405 Method Not Allowed to PUT requests to /api/rooms/:roomId/', async () => {
    const res = await request(server).put('/api/rooms/4160333/photos');
    expect(res.statusCode).to.equal(405);
  });

  test('Should respond with a 405 Method Not Allowed to PATCH requests to /api/rooms/:roomId/', async () => {
    const res = await request(server).patch('/api/rooms/4160333/photos');
    expect(res.statusCode).to.equal(405);
  });

  test('Should respond with a 405 Method Not Allowed to DELETE requests to /api/rooms/:roomId/', async () => {
    const res = await request(server).delete('/api/rooms/4160333/photos');
    expect(res.statusCode).to.equal(405);
  });
});
