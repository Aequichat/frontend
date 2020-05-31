const express = require('express');
const bodyParser = require('body-parser');
const expressStaticGzip = require('express-static-gzip');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const storyRoutes = require('./routes/story');
const progressRoutes = require('./routes/progress');

const app = express();

app.use(expressStaticGzip('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', storyRoutes);
app.use('/api', progressRoutes);

module.exports = app;
