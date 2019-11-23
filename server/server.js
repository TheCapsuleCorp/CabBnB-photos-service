const express = require('express');
const parser = require('body-parser');
const mongodb = require('../db');

const app = express();

// const router = require('./routes.js'); <- MORE THAN LIKELY NOT NEEDED DUE TO ONLY HAVING ONE ENDPOINT
// app.use('/', router);

app.use(parser.json());
app.use(express.static('./client/dist'));
app.use(parser.urlencoded({ extended: false }));

app.get('/rooms/:roomsid', function (req, res) {
  mongodb.find(req.params.roomsid, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data.length === 0) {
        res.status(404).send('Room not found');
      } else {
        res.status(200).send(data);
      }
    }
  });
});

app.listen(8080, () => {
  console.log('Successfully Connected to the Server on port 8080 - SERVER Config attempt');
});
