const AccountRepository = require('../repositories/AccountRepository');
const Account = require('../models/Account');

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
    try {
      const account = new Account(req.body);
      const result = await AccountRepository.create(account);
      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
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
