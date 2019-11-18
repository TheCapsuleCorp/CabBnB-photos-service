const express = require('express');
// const model = require('./models/model.js'); <-- UNCOMMENT IF I USE MODELS
// const sControllers = require('.sdb/index.js');
const parser = require('body-parser');
const app = express();
// const router = require('./routes.js'); <- MORE THAN LIKELY NOT NEEDED DUE TO ONLY HAVING ONE ENDPOINT

app.use(parser.json());
app.use(express.static('./client/dist'));

// app.use('/', router);

app.get('/', function (req, res) {
  res.send('Get Request - Rendering Home Page');
});

app.listen(8080, () => {
  console.log('Successfully Connected to the Server on port 8080');
});
