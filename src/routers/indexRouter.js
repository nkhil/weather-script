'use strict';

const express = require('express');
const { get } = require('../controllers/temperature');

const router = express.Router();

router.get('/', async (_, res, next) => {
  const result = await get();
  res.send(result);
});

module.exports = router;
