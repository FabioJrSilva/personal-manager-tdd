const AccountRepository = require('../repositories/AccountRepository');
const Account = require('../models/Account');

class AccountController {
  constructor(repository) {
    this.repository = repository;
  }

  async index(req, res) {
    try {
      const result = await this.repository.all();
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const account = new Account(req.body);
      const result = await this.repository.create(account);
      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const result = await this.repository.findById(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}

module.exports = new AccountController(AccountRepository);
