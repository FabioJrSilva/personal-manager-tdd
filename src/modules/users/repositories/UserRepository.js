const DB = require('../../../database/index');

class UserRepository {
  constructor() {
    this.db = DB;
  }

  async findAll(filter = {}) {
    return this.db('users').where(filter).select();
  }

  async create(user) {
    if (!user.name) throw new Error({ error: 'Nome é obrigatório!' });
    if (!user.email) throw new Error({ error: 'Email é obrigatório!' });
    if (!user.password) throw new Error({ error: 'Senha é obrigatório!' });

    const userDb = await this.findAll({ email: user.email });
    if (userDb && userDb.length) throw new Error({ error: 'Email já existe!' });

    return this.db('users').insert(user, '*');
  }
}

module.exports = new UserRepository();
