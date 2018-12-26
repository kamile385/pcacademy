const express = require('express');
const groupController = require('../controllers/group');

const router = express.Router();

router.post('/', groupController.create);
router.get('/', groupController.getAll);
router.get('/:id', groupController.getById);
router.put('/:id', groupController.updateById);
router.delete('/:id', groupController.deleteById);

module.exports = router;
