const request = require('supertest');
const app = require('../../src/app');

const mail = `${Date.now()}@exemplo.com`;

describe('User', () => {
  it('should list all users', () => {
    return request(app).get('/users').then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  it('should insert new user', () => {

    return request(app).post('/create')
      .send({ name: 'Fabio', mail, password: '010203' }).then((res) => {
        expect(res.status).toBe(201);
        expect(res.body.name).toEqual('Fabio');
      });
  });

  it('should not create user without name', () => {
    return request(app).post('/create')
      .send({ mail, password: '010203' }).then((res) => {
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Nome é obrigatório!');
      });
  });

  it('should not create user without mail', async () => {
    const user = await request(app).post('/create')
      .send({ name: 'Fabio', password: '010203' });
    expect(user.status).toBe(400);
    expect(user.body.error).toBe('Email é obrigatório!');
  });

  it('should not create user without password', (done) => {
    request(app).post('/create')
      .send({ name: 'Fabio', mail }).then((res) => {
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Password é obrigatório!');
        done();
      })
      .catch(error => done.fail(error));
  });

  it('should not create user without mail exist', () => {
    return request(app).post('/create')
      .send({ name: 'Fabio', mail: 'fabio@exemplo.com', password: '010203' }).then((res) => {
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Email já existe!');
      });
  });
});
