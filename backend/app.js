const express = require('express');

const app = express();

app.get('/api/test', (req, res) => {
    res.send('Aequichat API REST');
});
app.use(express.static('public'))
module.exports = app;
