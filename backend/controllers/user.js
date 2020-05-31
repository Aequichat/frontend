const connection = require('../config/db');
const { ObjectId } = require('mongodb');

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

        userData.username = String(userData.username).toLowerCase();
        userData.email = String(userData.email).toLowerCase();

        const db = await connection.getConnection();
        const usersCollection = db.collection('users');
        const user = await usersCollection.findOne(
            { $or: [{ username: userData.username }, { email: userData.email }] },
        );

        if (user) {
            return res.status(403).send({ message: 'Usuario ya existe' });
        }

        await usersCollection.insertOne(userData);

        delete userData.password;

        return res.status(200).send({ message: 'Usuario registrado correctamente!', user: userData });
    } catch (error) {
        return res.status(500).send(error);
    }
}

async function updateUser(req, res) {
    try {
        let _id = req.body.id;
        let password = req.body.password;

        if (!_id || !password) {
            return res.status(400).send({ message: 'Datos incompletos' });
        }

        const db = await connection.getConnection();
        const usersCollection = db.collection('users');

        const result = await usersCollection.findOneAndUpdate(
            { _id: new ObjectId(_id) }, { $set: { password } },
            { returnOriginal: false }
        );

        if (!result.value) {
            return res.status(403).send({ message: 'Usuario no existe' });
        }

        delete result.value.password;

        return res.status(200).send({ message: 'Contraseña actualizada correctamente', user: result.value });
    } catch (error) {
        return res.status(500).send({ message: 'User no valido' });
    }
}

module.exports = {
    addUser,
    updateUser
};
