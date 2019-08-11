const express = require('express');
const router = express.Router();

const categoriesRoute = require('./categories');
const productsRoute = require('./products');
const usersRoute = require('./users');

router.use('/api', categoriesRoute);
router.use('/api', productsRoute);
router.use('/api', usersRoute);

module.exports = router;