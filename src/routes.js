module.exports = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).json({
      message: 'curso TDD'
    });
  });

  app.route('/users')
    .get(app.controllers.user.index)
    .post(app.controllers.user.store);
};
