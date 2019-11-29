const db = require('./index.js');
const mockData = require('./mockData.js');
const mongoose = require('mongoose');

db.connect().then(() => {
  return db.Photos.insertMany(mockData);
}).then(() => {
  return db.Photos.count({});
}).then((count) => {
  console.log('there are %d photos in collection', count);
}).then(() => {
  return mongoose.connection.close();
}).catch(err => {
  console.log(`Error while seeding database: ${err}`);
})
