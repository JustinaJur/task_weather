const axios = require('axios');

const getLocations = async (req, res) => {
  try {
    const response = await axios.get('https://api.meteo.lt/v1/places');
    const filteredLocations = response.data.filter(location => location.countryCode === 'LT');
    res.json(filteredLocations);
  } catch (error) {
    console.error('Error fetching location list:', error);
    res.status(500).send('Server Error');
  }
};

module.exports = { getLocations };
