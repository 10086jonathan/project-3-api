const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

require('dotenv').config();
require('./config/database');

// mount middleware
app.use(express.json());
app.use(logger('dev'));
app.use(cors());

// mount routes
app.use('/api/users', require('./routes/api/users'));

// tell express to listen

app.listen(port, function() {
    console.log(`express app is running on port ${port}`)
});