const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);
const app = express(); 

// Models
require('./models/Game');
require('./models/Player');

// Routes
require('./routes/gameRoutes')(app); 

const PORT = process.env.PORT || 5000;
app.listen(PORT);
