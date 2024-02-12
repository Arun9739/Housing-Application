// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());

const mongoUrl = process.env.MONGO_URL;

// MongoDB connection
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define house schema
const houseSchema = new mongoose.Schema({
  house_type: String,
  address: {
    city: String,
    area: String,
    pincode: String,
    state: String,
    country: String,
  },
  price: Number,
  negotiable: String,
  owner_details: {
    name: String,
    address: String,
    email: String,
    phone: String,
  },
  status: String,
});

// Define house model
const House = mongoose.model('House', houseSchema);


// Routes

// Home route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the House API' });
  });

// Upload house details
app.post('/houses', async (req, res) => {
    try {
      const newHouse = new House(req.body);
      await newHouse.save();
      res.status(201).json({ message: 'House details uploaded successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Get house details
  app.get('/houses/:houseId', async (req, res) => {
    try {
      const house = await House.findById(req.params.houseId);
      if (!house) {
        return res.status(404).json({ error: 'House not found' });
      }
      res.json(house);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // List all houses
  app.get('/houses', async (req, res) => {
    try {
      const houses = await House.find();
      res.json(houses);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Handle invalid routes
  app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
  });
  
  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
  });
  
  // Start server
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });