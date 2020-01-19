const db = require('./index.js');
const mockData = require('./mockData.js');
const mongoose = require('mongoose');

const roomIdConverter = (arr) => {
  var cache = {};
  var count = 11111110;
  return arr.map(item => {
    if (!cache[item.roomId]) {
      count++;
      cache[item.roomId] = count;
      return {
        url: item.url,
        description: item.description,
        roomId: cache[item.roomId]
      };
    } else {
      return {
        url: item.url,
        description: item.description,
        roomId: cache[item.roomId]
      };
    }
  });
}

db.connect().then(() => {
  return db.Photos.remove({});
}).then(() => {
  return db.Photos.insertMany(roomIdConverter(mockData));
}).then(() => {
  return db.Photos.count({});
}).then((count) => {
  console.log('there are %d photos in collection', count);
}).then(() => {
  return mongoose.connection.close();
}).catch(err => {
  console.log(`Error while seeding database: ${err}`);
})
