const express = require('express');
const paymentController = require('../controllers/payment');

const router = express.Router();

router.post('/', paymentController.create);
router.get('/', paymentController.getAll);
router.get('/:id', paymentController.getById);
router.put('/:id', paymentController.updateById);
router.delete('/:id', paymentController.deleteById);

module.exports = router;
