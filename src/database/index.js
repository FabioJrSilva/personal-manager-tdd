const knex = require('knex');
const knexfile = require('../../knexfile');

const DB = knex(knexfile.development);

module.exports = DB;
