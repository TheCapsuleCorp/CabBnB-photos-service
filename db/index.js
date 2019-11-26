//https://mongoosejs.com/docs/index.html
const set = require('./complete.js');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photos', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const photoSchema = new mongoose.Schema({
  url: String,
  description: String,
  roomId: Number,
});

const Photos = mongoose.model('Photos', photoSchema);

// Photos.insertMany(set, (err) => { //<----Uncomment for pushing to Git
//   if (err) {
//     console.log(err);
//   } else {
//     Photos.count({}, function (err, count) {
//       console.log('there are %d photos in collection', count);
//     });
//   }
// });

const find = (roomsId, cb) => {
  Photos.find({roomId: roomsId}).exec(cb);
};

module.exports.find = find;
//Test exports
module.exports.Photos = Photos;
