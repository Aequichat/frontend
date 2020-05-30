const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', userRoutes);

module.exports = app;
