const AccountRepository = require('../repositories/AccountRepository');

class AccountController {
  async index(req, res) {
    await AccountRepository.all()
      .then((result) => {
        res.status(200).json(result);
      }).catch((err) => {
        res.status(400).json(err);
      });
  }

  async store(req, res) {
    await AccountRepository.create(req.body)
      .then((result) => {
        res.status(201).json(result);
      }).catch((err) => {
        res.status(422).json(err);
      });
  }

  async show(req, res) {
    await AccountRepository.findById(req.params.id)
      .then((result) => {
        res.status(200).json(result);
      }).catch((err) => {
        res.status(404).json(err);
      });
  }
}

module.exports = new AccountController();
