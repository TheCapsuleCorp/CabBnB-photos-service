const express = require('express');
const parser = require('body-parser');
const mongodb = require('../db');

const app = express();

// const router = require('./routes.js'); <- MORE THAN LIKELY NOT NEEDED DUE TO ONLY HAVING ONE ENDPOINT
// app.use('/', router);

app.use(parser.json());
app.use(express.static('./client/dist'));
app.use(parser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  // mongodb.save(photos, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(data);
  //   }
  // });
  console.log('response from GET request       :' + res);
  res.send(200);
});

app.listen(8080, () => {

  console.log('Successfully Connected to the Server on port 8080 - TEST attempt');
});

const photos = [
  {
    url: 'https://cap-bnb-photo-service.s3.us-east-2.amazonaws.com/1-stream-belmont-3.jpg',
    description: 'Really cool place!',
    roomId: 3447812,
  }
]
