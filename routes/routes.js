const express = require('express');
const router = express.Router();

const pageController = require('../controllers/PageController');

module.exports = router;

router.get('/', pageController.home);
