const debug = require('debug')('API-REST');

const connection = require('../config/db');

/**
 * Get a story by id
 * @param {Object} req Request object
 * @param {Object} res Response object
 */
async function getProgress(req, res) {
    try {
        const db = await connection.getConnection();
        const progress = await db.collection('progress').findOne({ userId: Number(req.params.userId) }, { projection: { _id: 0 } });

        if (!progress) {
            return res.status(200).send({ message: 'Aún no existe progreso disponible' });
        }

        return res.status(200).send(progress);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

/**
 * Get the progress for a specific user
 * @param {Object} req Request object
 * @param {Object} res Response object
 */
async function createOrUpdateProgress(req, res) {
    try {
        const db = await connection.getConnection();
        debug(JSON.stringify(req.body));
        debug(req.body.userId);
        const progress = await db.collection('progress').findOneAndUpdate({ userId: Number(req.body.userId) }, { $set: req.body }, { upsert: true, returnOriginal: false });

        return res.status(200).send(progress.value);
    } catch (error) {
        debug(JSON.stringify(error));
        return res.status(500).send({ message: error });
    }
}

module.exports = {
    getProgress,
    createOrUpdateProgress,
};
