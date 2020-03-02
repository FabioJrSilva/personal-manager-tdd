const { Router } = require('express');
const UserController = require('./modules/users/controllers/UserController');
const AccountController = require('./modules/accounts/controllers/AccountController');

const routes = Router();

routes.get('/', (req, res) => {
  res.status(200).json({
    message: 'curso TDD'
  });
});

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/accounts', AccountController.store);

module.exports = routes;
