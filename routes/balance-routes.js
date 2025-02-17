const express = require('express');
const { updateBalance } = require('../controllers/balance-controller');

const router = express.Router();

router.patch('/balance', updateBalance);

module.exports = router;
