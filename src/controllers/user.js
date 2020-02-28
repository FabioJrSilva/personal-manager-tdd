module.exports = (app) => {
  const index = async (req, res) => {
    app.db('users').select().then((response) => {
      res.status(200).json(response);
    });
  };

  const store = async (req, res) => {
    try {
      const user = await app.db('users').insert(req.body, '*');

      res.status(201).json(user[0]);
    } catch (err) {
      res.status(400).json(err);
    }
  };

  return { index, store };
};
