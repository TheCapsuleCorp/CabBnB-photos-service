const axios = require('axios');

module.exports = {
  getResponseS3() {
    return axios
      .get(`https://cap-bnb-photo-service.s3.us-east-2.amazonaws.com/1-stream-belmont-3.jpg`)
      .then(res => res.data)
      .catch(error => console.log(error));
  }
};
