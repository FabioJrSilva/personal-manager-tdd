const BaseModel = require('../../../core/BaseModel');

class User extends BaseModel {
  constructor(data) {
    super(data, ['name', 'email', 'password']);
  }
}

module.exports = User;
