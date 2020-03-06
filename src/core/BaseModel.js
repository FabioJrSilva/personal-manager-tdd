class BaseModel {
  /**
   * @param {{}} data
   * @param {[string]} properties
   */
  constructor(data, properties) {
    this.required(data, properties);
    this.setProperty(data, properties);
  }

  /**
   * @param {{}} data
   * @param {[string]} properties
   */
  setProperty(data, properties) {
    properties.forEach((property) => {
      if (data[property]) {
        this[property] = data[property];
      }
    });
  }

  /**
   * @param {{}} data
   * @param {[string]} properties
   */
  required(data, properties) {
    const errors = [];
    properties.forEach((param) => {
      if (!data[param] || data[param] === null) {
        errors.push(`${param} is required!`);
      }
    });

    if (errors.length) {
      throw new Error(errors);
    }
  }
}

module.exports = BaseModel;
