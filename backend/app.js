const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const expressStaticGzip = require('express-static-gzip');

const config = require('./config/env');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const storyRoutes = require('./routes/story');
const progressRoutes = require('./routes/progress');

const app = express();
const corsOptions = {
    origin: config.CORS_ORIGINS
};

app.use(expressStaticGzip('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', storyRoutes);
app.use('/api', progressRoutes);

module.exports = app;
