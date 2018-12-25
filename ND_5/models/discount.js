const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let DiscountSchema = new Schema({
  state_financing: { type: Boolean, required: true },
  praise: { type: Boolean, required: true },
  not_first_year: { type: Boolean, required: true },
  second_program: { type: Boolean, required: true }
});

module.exports = mongoose.model('Discount', DiscountSchema);
