class Validate {
  required(params, values) {
    params.forEach((param) => {
      if (!values[param] || values[param] === null) {
        throw new Error(`${param} is required!`);
      }
    });
  }
}

module.exports = Validate;
