const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const locationRoutes = require('./routes/locationRoutes');
const weatherRoutes = require('./routes/weatherRoutes');
const citySelectionRoutes = require('./routes/citySelectionRoutes');

app.use('/api/locations', locationRoutes);
app.use('/api/weather', weatherRoutes);
app.use('/api', citySelectionRoutes);

const errorHandler = require('./utils/errorHandler');
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
