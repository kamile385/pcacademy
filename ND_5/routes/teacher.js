const express = require('express');
const passport = require('passport');

const teacherController = require('../controllers/teacher');
const router = express.Router();

router.get('/', teacherController.getAll);
// router.get('/:id', teacherController.getById);
// router.put('/:id', teacherController.updateById);
// router.delete('/:id', teacherController.deleteById);

router.post('/signup', passport.authenticate('signup', { session: false }), teacherController.signUp);
router.post('/login', teacherController.login);

module.exports = router;
