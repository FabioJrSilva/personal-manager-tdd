const AccountControler = require('../modules/accounts/controllers/AccountController');

module.exports = {
  index: async (req, res) => {
    return AccountControler.index(req, res);
  },
  store: async (req, res) => {
    return AccountControler.store(req, res);
  },
  show: async (req, res) => {
    return AccountControler.show(req, res);
  },
};
