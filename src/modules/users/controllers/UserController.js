const User = require('../model/User');

class UserController {
  constructor(repository) {
    this.repository = repository;
  }

  async index(req, res) {
    try {
      const result = await this.repository.all();
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({ error: err.messsage });
    }
  }

  async show(req, res) {
    try {
      const result = await this.repository.findById(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const user = new User(req.body);
      const result = await this.repository.create(user);
      res.status(201).json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = UserController;
