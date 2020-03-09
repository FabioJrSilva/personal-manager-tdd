const { Router } = require('express');
const UserHttpRequest = require('../../http/UserHttpRequest');

const routes = Router();

routes.get('/users', UserHttpRequest.index);
routes.get('/users/:id', UserHttpRequest.show);
routes.post('/users', UserHttpRequest.store);

module.exports = routes;
