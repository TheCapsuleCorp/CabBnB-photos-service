const express = require('express');
const parser = require('body-parser');
const path = require('path');

const apiRouter = require('./apiRouter');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/../client/dist`));

app.use('/api', apiRouter);

app.get('/rooms', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
});



module.exports = app;
