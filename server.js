const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const watches = [
    { id: 1, brand: 'OMEGA', model: 'Speedmaster Chronograph', type: 'Chronograph', dial: 'Black', price: 2999.00 },
    { id: 2, brand: 'TISSOT', model: 'PRX Powermatic 80', type: 'Automatic', dial: 'Blue', price: 599.00 },
    { id: 3, brand: 'BREITLING', model: 'Chronomat GMT 40', type: 'Automatic', dial: 'Blue', price: 4199.00 },
    { id: 4, brand: 'BREITLING', model: 'Classic AVI', type: 'Chronograph', dial: 'Black', price: 2999.00 },
    { id: 5, brand: 'OMEGA', model: 'Speedmaster Racing Chronograph', type: 'Chronograph', dial: 'White', price: 999.00 },
    { id: 6, brand: 'SEIKO', model: 'SSB425P1', type: 'Chronograph', dial: 'White', price: 499.00 },
    { id: 7, brand: 'TISSOT', model: 'PRX', type: 'Quartz', dial: 'Blue', price: 399.00 },
    { id: 8, brand: 'SEIKO', model: '5', type: 'Quartz', dial: 'Black', price: 199.00 } 
  ];

app.get('/watches', (req, res) => {
  res.json(watches);
});

// Add this route to handle the root URL
app.get('/', (req, res) => {
    res.send('Welcome to RAFASHOP API');
  });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
