'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.send('Aequichat API REST');
});

module.exports = app;
