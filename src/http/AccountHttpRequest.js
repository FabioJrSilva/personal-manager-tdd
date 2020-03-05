const AccountControler = require('../modules/accounts/controllers/AccountController');
const AccountRepository = require('../modules/accounts/repositories/AccountRepository');

const Controllers = new AccountControler(AccountRepository);

module.exports = {
  index: async (req, res) => {
    return Controllers.index(req, res);
  },
  store: async (req, res) => {
    return Controllers.store(req, res);
  },
  show: async (req, res) => {
    return Controllers.show(req, res);
  },
};
