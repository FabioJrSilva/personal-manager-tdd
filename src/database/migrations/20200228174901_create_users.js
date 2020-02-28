exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNull();
    table.string('password').notNull();
    table.string('email').notNull().unique();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
