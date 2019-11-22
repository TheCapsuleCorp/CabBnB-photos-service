const expect = require('chai').expect;

const getS3 = require('./test-server.js').getS3;
const getLocal = require('./test-server.js').getLocal;

describe('First test', () => {
  it('Should assert true to be true', () => {
    expect(true).to.be.true;
  });
});


describe('Access S3 server object', () => {
  it('Should return a string in response to a GET request to an object in S3', () => {
    return getS3()
      .then(response => {
        console.log(typeof response);
        //expect an string back
        expect(typeof response).to.equal('string');
      });
  });
});

describe('Successfully hit '/' on GET request and return string', () => {
  it('Should return a string in response to a GET request to local host', () => {
    return getLocal()
      .then(response => {
        console.log(typeof response);
        //expect an string back
        expect(typeof response).to.equal('string');
      });
  });
});
