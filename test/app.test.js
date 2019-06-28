const request = require('supertest');
const app = require('../src/app');

describe('App', () => {
  it('should response app', () => {
    return request(app)
      .get('/')
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
});
