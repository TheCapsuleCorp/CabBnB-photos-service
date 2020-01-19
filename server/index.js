const app = require('./server.js');
const db = require('../db/index.js');

const PORT = process.env.PORT || 8080;

db.connect();

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
