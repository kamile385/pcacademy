const express = require('express');
const teacherController = require('../controllers/teacher');
const passport = require('passport');

const router = express.Router();

router.post('/', teacherController.create);
router.get('/', teacherController.getAll);
router.get('/:id', teacherController.getById);
router.put('/:id', teacherController.updateById);
router.delete('/:id', teacherController.deleteById);

module.exports = router;