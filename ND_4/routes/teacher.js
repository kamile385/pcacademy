const express = require('express');
const teacherController = require('../controllers/teacher');

const router = express.Router();

router.post('/', teacherController.create);
router.get('/', teacherController.getAll);
router.get('/:id', teacherController.getById);
router.put('/update/:id', teacherController.updateById);
router.delete('/delete/:id', teacherController.deleteById);

module.exports = router;