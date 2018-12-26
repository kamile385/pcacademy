const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CONFIG = require('../config');

let StudentSchema = new Schema({
  created_at: { type: Date, default: Date.now, required: true },
  student_name_surname: { type: String, required: true, max: 100 },
  parent_name_surname: { type: String, required: true, max: 100 },
  address: { type: String, required: true, max: 100 },
  telephone: {
    type: String,
    required: true,
    match: [CONFIG.TELEPHONE_REGEX, 'Please fill a valid phone number: +370...'],
    max: 12
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    match: [CONFIG.EMAIL_REGEX, 'Please fill a valid email address'],
    unique: true,
    max: 100
  },
  group: { type: String, required: true, max: 200 },
  identification_number: {
    type: String,
    match: [CONFIG.ID_NUMBER_REGEX, 'Please fill a valid personal identification number'],
    required: true
  },
  teacher: { type: Schema.Types.ObjectId, ref: 'Teacher', required: true }
}, { toJSON: { virtuals: true } });

StudentSchema.virtual('payments', {
  ref: 'Payment',
  localField: '_id',
  foreignField: 'student'
});

StudentSchema.virtual('attendances', {
  ref: 'Attendance',
  localField: '_id',
  foreignField: 'student'
});

module.exports = mongoose.model('Student', StudentSchema);
