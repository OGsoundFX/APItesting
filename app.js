const express = require('express');
const app = express();

const parenthesesRoutes = require('./parentheses');
app.use('/parentheses', parenthesesRoutes);

module.exports = app;
