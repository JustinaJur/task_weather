const axios = require('axios');

const getWeather = async (req, res) => {
  const placeCode = req.params.placeCode;
  try {
    const response = await axios.get(`https://api.meteo.lt/v1/places/${placeCode}/forecasts/long-term`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).send('Server Error');
  }
};

module.exports = { getWeather };
