const request = require('supertest');
const app = require('../../src/app');

describe('User', () => {
  test('should list all users', () => {
    return request(app).get('/users').then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  test('should insert new user', () => {
    const mail = `${Date.now()}@exemplo.com`;
    const user = { name: 'Fabio', mail, password: '010203' };

    return request(app).post('/create').send(user).then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toEqual('Fabio');
    });
  });
});
