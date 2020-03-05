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

    user = { ...result };
  });

  test('should be create a new account', () => {
    return request(app).post('/accounts')
      .send({ name: 'Acc #1', user_id: 1 })
      .then((res) => {
        expect(res.status).toBe(201);
        expect(res.body.name).toEqual('Acc #1');
      });
  });

  test('should return one accounts', async () => {
    const account = await AccountRepository.create({ name: 'Acc #2', user_id: user.id });
    expect(account.name).toEqual('Acc #2');

    return request(app).get('/accounts')
      .then((result) => {
        expect(result.status).toBe(200);
        expect(result.body.length).toBeGreaterThanOrEqual(1);
      });
  });

  test('sould return accounts by id', async () => {
    const account = await AccountRepository.create({ name: 'Acc #3', user_id: user.id });
    const result = await request(app).get(`/accounts/${account.id}`);
    expect(result.status).toBe(200);
    expect(result.body.name).toBe(account.name);
  });

  afterAll(async (done) => {
    await DB.migrate.rollback();
    done();
  });
});
