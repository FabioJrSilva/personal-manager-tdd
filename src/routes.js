const { Router } = require('express');
const AccountHttpRequest = require('./http/AccountHttpRequest');
const UserHttpRequest = require('./http/UserHttpRequest');

const route = Router();

route.get('/', (req, res) => {
  res.status(200).json({
    message: 'curso TDD'
  });
});

route.get('/users', UserHttpRequest.index);
route.post('/users', UserHttpRequest.store);

route.get('/accounts', AccountHttpRequest.index);
route.get('/accounts/:id', AccountHttpRequest.show);
route.post('/accounts', AccountHttpRequest.store);

module.exports = route;
