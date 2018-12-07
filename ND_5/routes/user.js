const express = require('express');
const userController = require('../controllers/user');
const passport = require('passport');

const router = express.Router();

router.post('/signup', passport.authenticate('signup', { session: false }), userController.signUp);

module.exports = router;