const express = require('express');
const parser = require('body-parser');
const path = require('path');
// const db = require('../db');
// db.connect();

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/', function (req, res) {
  res.send(200);
});

module.exports = app;
