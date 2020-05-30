const express = require('express');
const bodyParser = require('body-parser');

const { handleError } = require('./utils');

const usersRoutes = require('./routes/users');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', usersRoutes);

app.use(handleError);

module.exports = app;
