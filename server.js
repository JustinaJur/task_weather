const axios = require('axios');
const express = require('express');
// const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// app.use(cors());
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb', extended: true }));



app.get('/api/locations', async (req, res) => {
  try {
     const response = await axios.get('https://api.meteo.lt/v1/places');
     const filteredLocations = response.data.filter(location => location.countryCode === 'LT');
    res.json(filteredLocations);
  } catch (error) {
    console.error('Error fetching location list:', error);
    res.status(500).send('Server Error');
  }
});

app.get('/api/weather/:placeCode', async (req, res) => {
  const placeCode = req.params.placeCode;
  try {
    const response = await axios.get(`https://api.meteo.lt/v1/places/${placeCode}/forecasts/long-term`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).send('Server Error');
  }
});

// server.maxHeaderSize = 1e6;  
