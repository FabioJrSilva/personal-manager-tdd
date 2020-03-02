const UserRepository = require('../repositories/UserRepository');

class UserController {
  async index(req, res) {
    await UserRepository.all().then((response) => {
      res.status(200).json(response);
    }).catch((err) => {
      res.status(401).json(err);
    });
  }

  async store(req, res) {
    await UserRepository.create(req.body)
      .then((response) => {
        res.status(201).json(response[0]);
      }).catch((err) => {
        res.status(422).json(err);
      });
  }
}

module.exports = new UserController();
