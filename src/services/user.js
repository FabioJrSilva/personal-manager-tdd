module.exports = (app) => {
  const findAll = (filter = {}) => {
    return app.db('users').where(filter).select();
  };

  const create = async (user) => {
    if (!user.name) return { error: 'Nome é obrigatório!' };
    if (!user.mail) return { error: 'Email é obrigatório!' };
    if (!user.password) return { error: 'Password é obrigatório!' };

    const userDb = await findAll({ mail: user.mail });
    if (userDb && userDb.length) return { error: 'Email já existe!' };

    return app.db('users').insert(user, '*');
  };

  return { findAll, create };
};
