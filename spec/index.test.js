const expect = require('chai').expect;

const get = require('./test-server.js').get;

describe('First test', () => {
  it('Should assert true to be true', () => {
    expect(true).to.be.true;
  });
});


describe('Access S3 server object', () => {
  it('Should return a string in response to a GET request to an object in S3', () => {
    return get()
      .then(response => {
        console.log(typeof response);
        //expect an string back
        expect(typeof response).to.equal('string');
      });
  });
});
