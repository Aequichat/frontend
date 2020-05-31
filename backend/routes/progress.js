const express = require('express');

const progressController = require('../controllers/progress');

const router = express.Router();

router.get('/progress/:username', progressController.getProgress);
router.post('/progress', progressController.createOrUpdateProgress);

module.exports = router;
