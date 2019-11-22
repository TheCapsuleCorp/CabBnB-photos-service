const expect = require('chai').expect;

const get = require('./test-server.js').get;

describe('First test', () => {
  it('Should assert true to be true', () => {
    expect(true).to.be.true;
  });
});


describe('Get User tests', () => {
  it('Should return a string in response to a GET request', () => {
    return get()
      .then(response => {
        // console.log(response);
        //expect an string back
        expect(typeof response).to.equal('string');
      });
  });
});
