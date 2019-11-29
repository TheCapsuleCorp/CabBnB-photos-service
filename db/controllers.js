const { Photos } = require('./index.js');

module.exports = {
  get: (req, res) => {
    const roomId = Number(req.params.roomId);
    Photos.find({roomId: roomId}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        if (data.length === 0) {
          res.status(404).send('Accommodation not found');
        } else {
          res.status(200).send(data);
        }
      }
    });
  },
  post: (req, res) => {
    res.status(405).send('Method not allowed.');
  },
  put: (req, res) => {
    res.status(405).send('Method not allowed.');
  },
  patch: (req, res) => {
    res.status(405).send('Method not allowed.');
  },
  delete: (req, res) => {
    res.status(405).send('Method not allowed.');
  }
};
