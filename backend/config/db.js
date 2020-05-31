const { MongoClient } = require('mongodb');

const env = require('./env');

let db = null;

/**
 * Returns the database connection
 */
async function getConnection() {
    if (db) {
        return db.db();
    }

    try {
        const url = `mongodb+srv://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_ENDPOINT}/${env.DB_NAME}`;

        db = await MongoClient.connect(url, { useUnifiedTopology: true });

        return db.db();
    } catch (error) {
        return error;
    }
}

module.exports = {
    getConnection,
};
