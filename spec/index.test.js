const expect = require('chai').expect;

const getResponseFromS3 = require('./getResponseFromS3.js').getResponseFromS3;

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

describe('Send successful GET request to S3 bucket - indicating photo URLs are publicly accessible', () => {
  it('Returns a string', () => {
    return getResponseFromS3()
      .then(response => {
        expect(typeof response).to.equal('string');
      });
  });
});

describe('Database Tests', () => {
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

  it('Should retrieve data from Photos database', function(done) {
    Photos.countDocuments({}, (err, items) => {
      if(err) {throw err;}
      expect(items).equal(2);
      done();
    });
  });

  it('Should retrieve the correct amount of dcouments from the database', function(done) {
    Photos.countDocuments({}, (err, items) => {
      if(err) {throw err;}
      expect(items).equal(2);
      done();
    });
  });

});
