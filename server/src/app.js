const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const mongodb = require('./config/config');
require('dotenv').config(); 

const app = express();


app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(mongodb.MONGO_DB_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

// Routes
app.use('/api', apiRoutes);

// Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
