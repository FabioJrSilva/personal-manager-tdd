module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'personal_manager',
      user: 'postgres',
      password: 'docker'
    },
    migrations: {
      directory: `${__dirname}/migrations`
    }
  }
};
