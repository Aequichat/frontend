const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.post('/user', userController.addUser);

module.exports = router;
