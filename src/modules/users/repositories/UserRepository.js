const BaseRepository = require('../../../core/BaseRepository');

class UserRepository extends BaseRepository {
  constructor() {
    super('users');
  }
}

module.exports = new UserRepository();
