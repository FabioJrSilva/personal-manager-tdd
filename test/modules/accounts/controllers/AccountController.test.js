const request = require('supertest');

const app = require('../../../../src/app');
const DB = require('../../../../src/database/index');
const UserRepository = require('../../../../src/modules/users/repositories/UserRepository');


describe('Accounts', () => {
  let user;

  beforeAll(async () => {
    await DB.migrate.latest();

    const result = await UserRepository.create({
      name: 'Fabio',
      email: 'fabio@example.com',
      password: '010203'
    });

    user = { ...result[0] };
  });

  test('should be create a new account', () => {
    return request(app).post('/accounts')
      .send({ name: 'Acc #1', user_id: user.id })
      .then((res) => {
        expect(res.status).toBe(201);
        expect(res.body.name).toEqual('Acc #1');
      });
  });

  afterAll(async () => {
    await DB.migrate.rollback();
  });
});
