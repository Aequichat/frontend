const connection = require('../config/db');

/**
 * Login the user
 * @param {Object} req Request object
 * @param {Object} res Response object
 */
async function login(req, res) {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(402).send({ message: 'Params missing' });
        }

        const db = await connection.getConnection();
        const usersCollection = db.collection('users');
        const user = await usersCollection.findOne({ username, password });

        if (!user) {
            return res.status(404).send({ message: 'User not exists' });
        }

        return res.status(200).send({ user });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

module.exports = {
    login,
};
