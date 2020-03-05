const UserController = require('../modules/users/controllers/UserController');
const UserRepository = require('../modules/users/repositories/UserRepository');

const Controllers = new UserController(UserRepository);

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
