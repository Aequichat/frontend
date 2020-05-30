const MongoClient = require('mongodb').MongoClient;
const env = require('./env');
const debug = require('debug');

let db = null;

/**
 * Returns the database connection
 */
getConnection = async () => {
    if (db) {
        return db.db();
    } else {
        try {
            const url = `mongodb+srv://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_ENDPOINT}/${env.DB_NAME}`;
            db = await MongoClient.connect(url, { useUnifiedTopology: true });

            return db.db();
        } catch (error) {
            debug.log('Database connection failed')
            debug.log(error);

            return error;
        }
    }
}

module.exports = {
    getConnection
}
