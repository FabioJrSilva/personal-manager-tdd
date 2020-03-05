const BaseModel = require('../../../core/BaseModel');

class Account extends BaseModel {
  constructor(data) {
    super(data, ['name', 'user_id']);
  }
}

module.exports = Account;
