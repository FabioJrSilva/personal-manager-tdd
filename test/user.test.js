const request = require('supertest');
const app = require('../src/app');

describe('User', () => {
  it('should list all users', () => {
    return request(app).get('/users').then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(1);
      expect(res.body[0]).toHaveProperty('name', 'John Doe');
    });
  });

  it('should insert new user', () => {
    const user = { name: 'Fabio', mail: 'fabio@exemplo.com' };

    return request(app).post('/create').send(user).then((res) => {
      expect(res.status).toBe(201);
      expect(res.body.name).toEqual('Fabio');
    });
  });
});
