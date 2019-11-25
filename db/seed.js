const db = require('./index');
const mockData = require('./mockData.js');
const mongoose = require('mongoose');

db.connect().then(() => {
  return db.Photos.insertMany(mockData, (err) => {
    if (err) {
      console.log(err);
    } else {
      Photos.count({}, function (err, count) {
        console.log('there are %d photos in collection', count);
      });
    }
  });
}).then(() => {
  return mongoose.connection.close();
}).catch(err => {
  console.log(`Error while seeding database: ${err}`);
})
