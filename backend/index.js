const debug = require('debug');

const app = require('./app');
const config = require('./config/env');
const connection = require('./config/db');

async function init() {
    const db = await connection.getConnection();
    if (db) {
        debug.log('Database connection successful');
        app.listen(config.API_PORT, () => {
            debug.log(`API REST running at port ${config.API_PORT}`);
        });
    }
}

init();
