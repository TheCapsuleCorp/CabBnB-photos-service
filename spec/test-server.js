const axios = require('axios');

module.exports = {
  get() {
    return axios
      .get(`http://localhost:8080/`)
      .then(res => res.data)
      .catch(error => console.log(error));
  }
};
