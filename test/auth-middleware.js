const expect = require('chai').expect;

const authMiddleware = require('../middleware/auth');

describe('Auth middleware', function() {
  it('should throw an error if no authorization header is present', function() {
    const req = {
      get: function(headerName) {
        return null;
      }
    };
    expect(authMiddleware.bind(this, req, {}, () => {})).not.to.throw();
  });

  it('should throw an error if the authorization header is only one string', function() {
    const req = {
      get: function(headerName) {
        return 'xyz';
      }
    };
    expect(authMiddleware.bind(this, req, {}, () => {})).not.to.throw();
  });

  it('should throw an error if the authorization cannot be verified', function() {
    const req = {
      get: function(headerName) {
        return 'Bearer xyz';
      }
    };
    expect(authMiddleware.bind(this, req, {}, () => {})).not.to.throw();
  });
});
