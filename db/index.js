const mockData = require('./mockData.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photos', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

const photoSchema = new mongoose.Schema({
  url: String,
  description: String,
  roomId: Number,
});

const Photos = mongoose.model('Photos', photoSchema);

// Photos.insertMany(mockData, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     Photos.count({}, function (err, count) {
//       console.log('there are %d photos in collection', count);
//     });
//   }
// });
