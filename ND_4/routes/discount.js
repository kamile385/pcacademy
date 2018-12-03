const express = require('express');
const discountController = require('../controllers/discount');

const router = express.Router();

router.post('/', discountController.create);
router.get('/', discountController.getAll);
router.get('/:id', discountController.getById);
router.put('/update/:id', discountController.updateById);
router.delete('/delete/:id', discountController.deleteById);

module.exports = router;