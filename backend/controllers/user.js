const connection = require('../config/db');

/**
 * Register a new user
 * @param {Object} req Request object
 * @param {Object} res Response object
 */
async function addUser(req, res) {
    try {
        const userData = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        };

        if (!userData.username || !userData.email || !userData.password) {
            return res.status(402).send({ message: 'Params missing' });
        }

        const db = await connection.getConnection();
        const usersCollection = db.collection('users');
        const user = await usersCollection.findOne(
            { $or: [{ username: userData.username }, { email: userData.email }] },
        );

        if (user) {
            return res.status(200).send({ message: 'User already exists' });
        }

        await usersCollection.insertOne(userData);

        return res.status(200).send({ message: 'User registered successful' });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

module.exports = {
    addUser,
};
