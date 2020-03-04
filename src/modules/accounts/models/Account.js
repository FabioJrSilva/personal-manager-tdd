const BaseModel = require('../../../class/BaseModel');

class Account extends BaseModel {
  constructor(data) {
    super(data, ['name', 'user_id']);
  }
}

module.exports = Account;
