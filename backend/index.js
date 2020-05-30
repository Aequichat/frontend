const debug = require('debug')('API-REST');

const app = require('./app');
const config = require('./config/env');
const connection = require('./config/db');

async function init() {
    const db = await connection.getConnection();

    if (db) {
        debug('Database connection successful');

        app.listen(config.API_PORT, () => {
            debug(`API REST running at port ${config.API_PORT}`);
        });
    }
}

init();
