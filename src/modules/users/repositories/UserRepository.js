const BaseRepository = require('../../../core/BaseRepository');

class UserRepository extends BaseRepository {
  constructor() {
    super('users');
  }

  /**
   *
   * @param {*} data
   */
  async create(data) {
    const user = await this.find({ email: data.email });

    if (user.length) {
      throw new Error('email already exists');
    }

    const result = await this.db(this.table).insert(data, '*');

    return result[0];
  }
}

module.exports = new UserRepository();
