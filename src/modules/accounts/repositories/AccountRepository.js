const BaseRepository = require('../../../class/BaseRepository');

class AccountRepository extends BaseRepository {
  constructor() {
    super('accounts');
  }
}

module.exports = new AccountRepository();
