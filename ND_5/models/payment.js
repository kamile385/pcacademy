const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let PaymentSchema = new Schema({
  month: { type: String, required: true },
  amount: { type: Number, required: true },
  state_financing: { type: Number },
  praise: { type: Number },
  not_first_year: { type: Number },
  second_program: { type: Number },
  student: { type: Schema.Types.ObjectId, ref: 'Student', required: true }
});

module.exports = mongoose.model('Payment', PaymentSchema);
