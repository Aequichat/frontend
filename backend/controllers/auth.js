const connection = require('../config/db');

/**
 * Login the user
 * @param {Object} req Request object
 * @param {Object} res Response object
 */
async function login(req, res) {
    try {
        let { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).send({ message: 'Datos incompletos' });
        }

        username = String(username).toLowerCase()

        const db = await connection.getConnection();
        const usersCollection = db.collection('users');
        const user = await usersCollection.findOne({ username, password });

        if (!user) {
            return res.status(404).send({ message: 'Usuario o contraña no validos'});
        }

        return res.status(200).send( user );
    } catch (error) {
        return res.status(500).send(error);
    }
}

module.exports = {
    login,
};
