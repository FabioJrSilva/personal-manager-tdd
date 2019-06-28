module.exports = (app) => {
  app.route('/users').get(app.routes.users.findAll);
  app.route('/create').post(app.routes.users.create);
};
