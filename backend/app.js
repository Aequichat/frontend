const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Aequichat API REST');
});

module.exports = app;
