const express = require('express');
const router = express.Router();
const { logCitySelection } = require('../controllers/citySelectionController');

router.post('/log-city-selection', logCitySelection);

module.exports = router;