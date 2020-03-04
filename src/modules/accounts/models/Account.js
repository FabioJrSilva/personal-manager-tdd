const Validate = require('../../../class/Validate');

class Account extends Validate {
  constructor(name, user_id) {
    super();
    this.required(['name', 'user_id'], { name, user_id });
    Object.assign(this, { name, user_id });
  }
}

module.exports = Account;
