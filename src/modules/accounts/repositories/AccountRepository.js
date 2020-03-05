const BaseRepository = require('../../../core/BaseRepository');

class AccountRepository extends BaseRepository {
  constructor() {
    super('accounts');
  }
}

module.exports = new AccountRepository();
