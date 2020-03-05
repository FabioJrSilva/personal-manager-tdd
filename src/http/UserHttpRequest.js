const UserController = require('../modules/users/controllers/UserController');

module.exports = {
  index: async (req, res) => {
    return UserController.index(req, res);
  },
  store: async (req, res) => {
    return UserController.store(req, res);
  },
  show: async (req, res) => {
    return UserController.show(req, res);
  },
};
