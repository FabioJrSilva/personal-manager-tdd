const { Router } = require('express');
const UserHttpRequest = require('../../http/UserHttpRequest');

const routes = Router();

routes.get('/users', UserHttpRequest.index);
routes.post('/users', UserHttpRequest.store);

module.exports = routes;
