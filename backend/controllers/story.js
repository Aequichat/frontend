const connection = require('../config/db');

/**
 * Get all the stories
 * @param {Object} req Request object
 * @param {Object} res Response object
 */
async function getStories(req, res) {
    try {
        const db = await connection.getConnection();
        const stories = await db.collection('stories').find({}, { projection: { _id: 0, characters: 0, events: 0 } }).toArray();

        return res.status(200).send(stories);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

/**
 * Get a story by id
 * @param {Object} req Request object
 * @param {Object} res Response object
 */
async function getStoryById(req, res) {
    try {
        const db = await connection.getConnection();
        const story = await db.collection('stories').findOne({ id: Number(req.params.id) }, { projection: { _id: 0 } });

        if (!story) {
            return res.status(404).send({ message: 'No existe la historia' });
        }

        return res.status(200).send(story);
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

module.exports = {
    getStories,
    getStoryById,
};
