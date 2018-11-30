const express = require('express');
const studentController = require('../controllers/student');

const router = express.Router();

router.post('/', studentController.create);
router.get('/', studentController.getAll);
router.get('/:id', studentController.getById);
router.put('/update/:id', studentController.updateById);
router.delete('/delete/:id', studentController.deleteById);

module.exports = router;