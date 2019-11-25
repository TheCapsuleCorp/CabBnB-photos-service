const expect = require('chai').expect;

const getResponseS3 = require('./test-server.js').getResponseS3;

const mongoose = require('mongoose');
const Photos = require('../db/').Photos;

describe('First test', () => {
  it('Should assert true to be true', () => {
    expect(true).to.be.true;
  });
});

describe('Send successful GET request to S3 bucket - indicating photo URLs are publicly accessible', () => {
  it('Returns a string', () => {
    return getResponseS3()
      .then(response => {
        expect(typeof response).to.equal('string');
      });
  });
});

describe('Database Tests', function() {
  before(function (done) {
    mongoose.connect('mongodb://localhost/photos', {useNewUrlParser: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function() {
      console.log('We are connected to the database');
      done();
    });
  });

  describe('Photos Database', function() {
    it('Should retrieve data from Photos database', function(done) {
      Photos.countDocuments({}, (err, items) => {
        if(err) {throw err;}
        if(items === 0) {throw new Error('No data!');}
        done();
      });
    });

    it('Should retrieve the correct amount of dcouments from the database', function(done) {
      Photos.countDocuments({}, (err, items) => {
        if(err) {throw err;}
        expect(items).equal(155);
        done();
      });
    });
  });
  after(function(done){
    mongoose.connection.close(done);
  });
});
