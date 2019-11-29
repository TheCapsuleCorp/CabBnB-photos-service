const mockData = require('./mockData.js');
const mongoose = require('mongoose');

const connect = () => {
  mongoose.connect('mongodb://localhost/photos', {useNewUrlParser: true});
  const db = mongoose.connection;
  db.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
  });
  return db;
};

const photoSchema = new mongoose.Schema({
  url: String,
  description: String,
  roomId: Number,
});

const Photos = mongoose.model('Photos', photoSchema);

module.exports = {
  connect,
  Photos,
};
