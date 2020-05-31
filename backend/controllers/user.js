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
            return res.status(400).send({ message: 'Datos incompletos' });
        }

        const db = await connection.getConnection();
        const usersCollection = db.collection('users');
        const user = await usersCollection.findOne(
            { $or: [{ username: userData.username }, { email: userData.email }] },
        );

        if (user) {
            return res.status(403).send({ message: 'Usuario ya existe' });
        }

        await usersCollection.insertOne(userData);

        return res.status(200).send({ message: 'Usuario registrado correctamente!', user: userData });
    } catch (error) {
        return res.status(500).send(error);
    }
}

module.exports = {
    addUser,
};
