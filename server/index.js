const app = require('./server.js');
const db = require('../db/index.js');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

db.connect();
