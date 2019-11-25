const expect = require('chai').expect;

const getResponseS3 = require('./test-server.js').getResponseS3;

const mongoose = require('mongoose');
const Photos = require('../db/').Photos;
const set = require('../db/complete.js');

describe('First test', () => {
  it('Should assert true to be true', () => {
    expect(true).to.be.true;
  });
});


// describe('Get request to S3 object', () => {
//   it('Returns a string', () => {
//     return getResponseS3()
//       .then(response => {
//         console.log(typeof response);
//         //expect an string back
//         expect(typeof response).to.equal('string');
//       });
//   });
// });

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

    // Photos.insertMany(set, (err) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     Photos.count({}, function (err, count) {
    //       console.log('there are %d photos in collection', count);
    //     });
    //   }
    // });

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








// describe('Mongo Db Functionality', function() {
//   var dbName = 'photos';
//   var dbUrl = 'mongodb://localhost:8080/' + dbName;
//   it('Should retrieve the correct number of documents from MongoDb', function(done) {
//     mongoClient.connect(dbUrl, function(err, db) {
//       var collectionName = 'Photos';
//       db.collection(collectionName, function(err, collection) {
//         collection.find().toArray(function(err, items) {
//           expect(items.length).toEqual(155);
//           db.close();
//           done();
//         });
//       });
//     });
//   });
// });

// describe('Get string back from Get request to slash endpoint at Local Host', () => {
//   it('Returns a string', () => {
//     return getResponseHome()
//       .then(response => {
//         console.log(typeof response);
//         //expect an string back
//         expect(typeof response).to.equal('string');
//       });
//   });
// });
