const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let PaymentSchema = new Schema({
  date: { type: Date, default: Date.now, required: true },
  amount: { type: Number, required: true }
});

PaymentSchema.virtual('discounts', {
  ref: 'Discount',
  localField: '_id',
  foreignField: 'payment'
});

module.exports = mongoose.model('Payment', PaymentSchema);
