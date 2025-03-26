const logCitySelection = (req, res) => {
    const { city, timestamp } = req.body;
  
    if (city && timestamp) {
      console.log(`City selected: ${city} at ${timestamp}`);
      res.status(200).send('City selection logged');
    } else {
      res.status(400).send('Bad request, city and timestamp are required');
    }
  };
  
  module.exports = { logCitySelection };
  