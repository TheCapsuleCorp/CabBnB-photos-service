//https://mongoosejs.com/docs/index.html

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

Photos.insertMany([
  {
    url: 'https://cap-bnb-photo-service.s3.us-east-2.amazonaws.com/1-stream-belmont-3.jpg',
    description: 'Really cool place!',
    roomId: 3447812,
  }
], (err) => {
  if (err) {
    console.log(err);
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
