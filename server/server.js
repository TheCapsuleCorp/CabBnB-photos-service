const express = require('express');
const parser = require('body-parser');
const mongodb = require('../db');

const app = express();

app.use(parser.json());
app.use(express.static('./client/dist'));
app.use(parser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.send(200);
});

app.listen(8080, () => {
  console.log('Successfully Connected to the Server on port 8080 - TEST attempt');
});
