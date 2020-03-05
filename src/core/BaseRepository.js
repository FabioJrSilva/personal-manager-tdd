const DB = require('../database');

class BaseRepository {
  constructor(table) {
    this.db = DB;
    this.table = table;
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
   * @param {{ key: value }} filter
   * @default {}
   */
  async find(filter = {}) {
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
