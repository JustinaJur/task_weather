const express = require('express');
const router = express.Router();
const { getWeather } = require('../controllers/weatherController');

router.get('/:placeCode', getWeather);

module.exports = router;
