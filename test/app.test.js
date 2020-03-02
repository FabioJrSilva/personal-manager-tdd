const request = require('supertest');
const app = require('../src/app');

describe('App', () => {
  test('should response app', async (done) => {
    return request(app)
      .get('/')
      .then((res) => {
        expect(res.status).toBe(200);
        done();
      });
  });
});
