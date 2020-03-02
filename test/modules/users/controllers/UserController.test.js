const request = require('supertest');
const app = require('../../../../src/app');
const DB = require('../../../../src/database/index');

const email = `${Date.now()}@exemplo.com`;

describe('User', () => {
  beforeAll(async () => {
    await DB.migrate.latest();
  });

  test('should insert new user', () => {
    return request(app).post('/users')
      .send({ name: 'Fabio', email, password: '010203' })
      .then((res) => {
        expect(res.status).toBe(201);
        expect(res.body.name).toEqual('Fabio');
      });
  });

  test('should list all users', async () => {
    return request(app).get('/users')
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
      });
  });

  test('should not create user without name', () => {
    return request(app).post('/users')
      .send({ email, password: '010203' })
      .catch((res) => {
        expect(res.status).toBe(422);
        expect(res.error).toBe('Nome é obrigatório!');
      });
  });

  test('should not create user without email', () => {
    return request(app).post('/create')
      .send({ name: 'Fabio', password: '010203' })
      .catch((res) => {
        expect(res.status).toBe(422);
        expect(res.error).toBe('Email é obrigatório!');
      });
  });

  test('should not create user without password', () => {
    return request(app).post('/users')
      .send({ name: 'Fabio', email })
      .catch((res) => {
        expect(res.status).toBe(422);
        expect(res.error).toBe('Senha é obrigatório!');
      });
  });

  test('should not create user without email exist', async () => {
    await request(app).post('/users')
      .send({ name: 'Fabio', email: 'fabio@exemplo.com', password: '010203' });

    return request(app).post('/users')
      .send({ name: 'Fabio', email: 'fabio@exemplo.com', password: '010203' })
      .catch((res) => {
        expect(res.status).toBe(422);
        expect(res.error).toBe('Email já existe!');
      });
  });

  afterAll(async (done) => {
    await DB.migrate.rollback();
    done();
  });
});
