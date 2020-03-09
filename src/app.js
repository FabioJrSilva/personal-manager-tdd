const express = require('express');
const knexLogger = require('knex-logger');

const DB = require('./database/index');
const routes = require('./routes');
const UserRoutes = require('./modules/users/routes');
const AccountsRoutes = require('./modules/accounts/routes');

class App {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(express.json());
    this.server.use(knexLogger(DB));
  }

  routes() {
    this.server.use(routes);
    this.server.use(UserRoutes);
    this.server.use(AccountsRoutes);
  }
}

module.exports = new App().server;
