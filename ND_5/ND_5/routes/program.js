const express = require('express');
const programController = require('../controllers/program');

const router = express.Router();

router.post('/', programController.create);
router.get('/', programController.getAll);
router.get('/:id', programController.getById);
router.put('/:id', programController.updateById);
router.delete('/:id', programController.deleteById);

module.exports = router;