const express = require('express');
const arbitrageController = require('../controllers/arbitrageController');

const router = express.Router();

router.post('/execute', arbitrageController.executeArbitrage);

module.exports = router;
