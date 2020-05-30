const connection = require('../config/db');

/**
 * Login the user
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {Function} next Next function handler
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

        return res.status(200).send({ message: 'Loggin successful' });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}

/**
 * Register a new user
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {Function} next Next function handler
 */
async function register(req, res) {
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
    login,
    register,
};
