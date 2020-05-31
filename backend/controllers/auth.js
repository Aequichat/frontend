const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const connection = require('../config/db');
const config = require('../config/env');

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

        username = username.toLowerCase();

        const db = await connection.getConnection();
        const usersCollection = db.collection('users');
        const user = await usersCollection.findOne({ username, password }, { projection: { password: 0 }});

        if (!user) {
            return res.status(404).send({ message: 'Usuario o contraseña no validos'});
        }

        return res.status(200).send( user );
    } catch (error) {
        return res.status(500).send(error);
    }
}

async function restorePassword(req, res) {
    try {
        let email = req.body.email;

        if (!email) {
            return res.status(400).send({ message: 'Por favor digita tu email' });
        }

        const db = await connection.getConnection();
        const usersCollection = db.collection('users');
        const user = await usersCollection.findOne({ email });

        if (!user) {
            return res.status(404).send({ message: 'El correo ingresado no esta registrado' });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.emailAuth.address,
                pass: config.emailAuth.password
            }
        });

        let emailTemplate = fs.readFileSync(path.resolve(__dirname, '..', 'html', 'email-template.html')).toString();

        emailTemplate = emailTemplate.replace('${id}', user._id);

        const mailOptions = {
            from: config.emailAuth.address,
            to: email,
            subject: 'Recuperar contraseña',
            html: emailTemplate
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).send({ message: 'Te hemos eviado un correo para recuperar tu contraseña' })
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = {
    login,
    restorePassword
};
