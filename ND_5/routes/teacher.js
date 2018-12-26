const express = require('express');
const teacherController = require('../controllers/teacher');

const router = express.Router();

router.post('/', teacherController.create);
router.get('/', teacherController.getAll);
router.get('/:id', teacherController.getById);
router.put('/:id', teacherController.updateById);
router.delete('/:id', teacherController.deleteById);

router.post('/signup', teacherController.signUp);
router.post('/login', teacherController.login);

module.exports = router;
