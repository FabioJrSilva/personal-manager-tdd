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
      .send({ name: 'Fabio', email, password: '123456' })
      .then((res) => {
        expect(res.status).toBe(201);
        expect(res.body.name).toEqual('Fabio');
      });
  });

  test('should not create user without name', async () => {
    const res = request(app).post('/users')
      .send({ email, password: '010203' });
    console.log(res.body);

    expect(res.status).toBe(422);
    expect(res.error).toBe('Nome é obrigatório!');
  });

  test.skip('should not create user without email', () => {
    return request(app).post('/create')
      .send({ name: 'Fabio', password: '010203' })
      .catch((res) => {
        expect(res.status).toBe(422);
        expect(res.error).toBe('Email é obrigatório!');
      });
  });

  test.skip('should not create user without password', () => {
    return request(app).post('/users')
      .send({ name: 'Fabio', email })
      .catch((res) => {
        expect(res.status).toBe(422);
        expect(res.error).toBe('Senha é obrigatório!');
      });
  });

  test.skip('should not create user without email exist', async () => {
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
