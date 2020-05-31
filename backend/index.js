const debug = require('debug')('API-REST');

const app = require('./app');
const config = require('./config/env');
const connection = require('./config/db');

async function init() {
    try {
        await connection.getConnection();

        debug('Database connection successful');

        app.listen(config.API_PORT, () => {
            debug(`API REST running at port ${config.API_PORT}`);
        });
    } catch (error) {
        debug('DATA-BASE ERROR ->', error);
    }
}

init();
