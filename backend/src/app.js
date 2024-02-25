
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require('./src/utils/database.js');

connectDB();
// Middleware
app.use(express.json());
app.use(helmet());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Define routes
app.get('/', (req, res) => {
  res.send('Arbicrypt Arbitrage Bot Backend is running...');
});

// Listen on PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
