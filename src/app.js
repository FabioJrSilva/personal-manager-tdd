const express = require('express');
const consign = require('consign');
const knex = require('knex');
const knexLogger = require('knex-logger');
const knexfile = require('../knexfile.js');

const app = express();

app.db = knex(knexfile.development);
app.use(knexLogger(app.db));

consign({ cwd: 'src', verbose: false })
  .include('./config/middlewares.js')
  .then('./controllers')
  .then('./routes.js')
  .then('./services')
  .into(app);

module.exports = app;
