const request = require('supertest');
const app = require('../../src/app');

const email = `${Date.now()}@exemplo.com`;

describe('User', () => {
  beforeAll(async () => {
    await app.db.migrate.latest();
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
      .catch((error) => {
        expect(error.status).toBe(400);
      });
  });

  // test('should not create user without email', async () => {
  //   const user = await request(app).post('/create')
  //     .send({ name: 'Fabio', password: '010203' });
  //   expect(user.status).toBe(400);
  //   expect(user.body.error).toBe('Eemail é obrigatório!');
  // });

  // test('should not create user without password', (done) => {
  //   request(app).post('/create')
  //     .send({ name: 'Fabio', email })
  //     .then((res) => {
  //       expect(res.status).toBe(400);
  //       expect(res.body.error).toBe('Password é obrigatório!');
  //       done();
  //     })
  //     .catch(error => done.fail(error));
  // });

  // test('should not create user without email exist', () => {
  //   return request(app).post('/create')
  //     .send({ name: 'Fabio', email: 'fabio@exemplo.com', password: '010203' })
  //     .then((res) => {
  //       expect(res.status).toBe(400);
  //       expect(res.body.error).toBe('Eemail já existe!');
  //     });
  // });

  afterAll(async () => {
    await app.db.migrate.rollback();
  });
});
