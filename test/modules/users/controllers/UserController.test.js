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
    const res = await request(app).post('/users')
      .send({ email, password: '010203' });

    expect(res.status).toBe(400);
    expect(res.body.error).toBe('name is required!');
  });

  test('should not create user without email', async () => {
    const res = await request(app).post('/users')
      .send({ name: 'Fabio', password: '010203' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('email is required!');
  });

  test('should not create user without password', async () => {
    const res = await request(app).post('/users')
      .send({ name: 'Fabio', email });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('password is required!');
  });

  test('should not create user without email exist', async () => {
    await request(app).post('/users')
      .send({ name: 'Fabio', email: 'fabio@exemplo.com', password: '010203' });

    const res = await request(app).post('/users')
      .send({ name: 'Fabio', email: 'fabio@exemplo.com', password: '010203' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('email already exists');
  });

  test('should return user by id', async () => {
    const user = await request(app).post('/users')
      .send({ name: 'Fabio', email: 'fabio1@exemplo.com', password: '010203' });
    expect(user.status).toBe(201);
    const res = await request(app).get(`/users/${user.body.id}`).send();

    expect(res.status).toBe(200);
    expect(res.body.id).toBe(user.body.id);
  });

  afterAll(async (done) => {
    await DB.migrate.rollback();
    done();
  });
});
