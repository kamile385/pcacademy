const express = require('express');
const attendanceController = require('../controllers/attendance');

const router = express.Router();

router.post('/', attendanceController.create);
router.get('/', attendanceController.getAll);
router.get('/:id', attendanceController.getById);
router.put('/update/:id', attendanceController.updateById);
router.delete('/delete/:id', attendanceController.deleteById);

module.exports = router;