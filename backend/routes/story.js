const express = require('express');

const storiesController = require('../controllers/story');

const router = express.Router();

router.get('/story', storiesController.getStories);
router.get('/story/:id', storiesController.getStoryById);

module.exports = router;
