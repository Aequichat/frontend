const express = require('express');
const expressStaticGzip = require("express-static-gzip");
const app = express();

app.get('/api/test', (req, res) => {
    res.send('Aequichat API REST');
});
app.use(expressStaticGzip('public'))
module.exports = app;
