const DB = require('../database');

class BaseRepository {
  constructor(table) {
    this.table = table;
    this.db = DB;
  }

  /**
   *
   * @param {{ key: value }} filter
   * @default {}
   */
  async all(filter = {}) {
    return this.db(this.table).where(filter).select();
  }

  /**
   *
   * @param {*} data
   */
  async create(data) {
    const result = await this.db(this.table).insert(data, '*');

    return result[0];
  }

  /**
   *
   * @param {Number} id
   */
  async findById(id) {
    const result = await this.db(this.table).where({ id }).select();

    return result[0];
  }
}

module.exports = BaseRepository;
