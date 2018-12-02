const express = require('express');
const programController = require('../controllers/program');

const router = express.Router();

router.post('/', programController.create);
router.get('/', programController.getAll);
router.get('/:id', programController.getById);
router.put('/update/:id', programController.updateById);
router.delete('/delete/:id', programController.deleteById);

module.exports = router;