const debug = require('debug');

const app = require('./app');
const config = require('./config');

app.listen(config.API_PORT, () => {
    debug.log(`API REST running at port ${config.API_PORT}`);
});
