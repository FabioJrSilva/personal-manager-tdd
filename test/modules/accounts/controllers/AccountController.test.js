const request = require('supertest');

const app = require('../../../../src/app');
const DB = require('../../../../src/database/index');
const UserRepository = require('../../../../src/modules/users/repositories/UserRepository');
const AccountRepository = require('../../../../src/modules/accounts/repositories/AccountRepository');


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

  test('should return one accounts', async () => {
    const account = await AccountRepository.create({ name: 'Acc #2', user_id: user.id });
    expect(account[0].name).toEqual('Acc #2');

    return request(app).get('/accounts')
      .then((result) => {
        expect(result.status).toBe(200);
        expect(result.body.length).toBeGreaterThanOrEqual(1);
      });
  });

  afterAll(async (done) => {
    await DB.migrate.rollback();
    done();
  });
});
