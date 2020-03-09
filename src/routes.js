const { Router } = require('express');

const route = Router();

route.get('/', (req, res) => {
  res.status(200).json({
    message: 'curso TDD'
  });
});

module.exports = route;
