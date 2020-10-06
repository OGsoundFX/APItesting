const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const parenthesesRoutes = require('./parentheses');
app.use('/parentheses', parenthesesRoutes);

module.exports = app;
