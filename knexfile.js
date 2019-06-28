module.exports = {
  test: {
    client: 'pg',
    version: '10',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'root',
      database: 'personal_manager',
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};
