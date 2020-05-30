'use strict';

const app = require('./app');
const config = require('./config');

app.listen(config.API_PORT, () => {
    console.log(`API REST running at port ${config.API_PORT}`);
});
