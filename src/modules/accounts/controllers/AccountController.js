const AccountRepository = require('../repositories/AccountRepository');

class AccountController {
  async store(req, res) {
    await AccountRepository.create(req.body)
      .then((result) => {
        res.status(201).json(result[0]);
      }).catch((err) => {
        res.status(422).json(err);
      });
  }
}

module.exports = new AccountController();
