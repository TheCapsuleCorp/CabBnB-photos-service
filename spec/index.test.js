const expect = require('chai').expect;

const getResponseS3 = require('./test-server.js').getResponseS3;
const getResponseHome = require('./test-server.js').getResponseHome;

describe('First test', () => {
  it('Should assert true to be true', () => {
    expect(true).to.be.true;
  });
});


describe('Get string back from Get request to S3', () => {
  it('Returns a string', () => {
    return getResponseS3()
      .then(response => {
        console.log(typeof response);
        //expect an string back
        expect(typeof response).to.equal('string');
      });
  });
});

describe('Get string back from Get request to slash endpoint at Local Host', () => {
  it('Returns a string', () => {
    return getResponseHome()
      .then(response => {
        console.log(typeof response);
        //expect an string back
        expect(typeof response).to.equal('string');
      });
  });
});
