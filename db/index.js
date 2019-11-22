//https://mongoosejs.com/docs/index.html
const set = require('./complete.js');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photos', {useNewUrlParser: true});
// const promise = require('bluebird');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const photoSchema = new mongoose.Schema({
  url: String,
  description: String,
  roomId: Number,
});

const Photos = mongoose.model('Photos', photoSchema);
//
Photos.insertMany(set, (err) => {
  if (err) {
    console.log(err);
  } else {
    Photos.count({}, function (err, count) {
      console.log('there are %d photos in collection', count);
    });
  }
});

 


const save = (photos, callback) => {
  Photos.insertMany(photos, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, docs);
    }
  });
};

// const findAsync = find.promisify();

const find = (cb) => {
  Photos.find({}).limit(25).sort({repoName: -1}).exec(cb);
};


module.exports.save = save;
module.exports.find = find;
