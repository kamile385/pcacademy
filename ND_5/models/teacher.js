const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CONFIG = require('../config');

let TeacherSchema = new Schema({
  teacher_name_surname: { type: String, required: true, max: 100 },
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
  password: { type: String, required: true }
}, { toJSON: { virtuals: true } });

TeacherSchema.virtual('students', {
  ref: 'Student',
  localField: '_id',
  foreignField: 'teacher'
});

TeacherSchema.virtual('groups', {
  ref: 'Group',
  localField: '_id',
  foreignField: 'teacher'
});

TeacherSchema.virtual('programs', {
  ref: 'Program',
  localField: '_id',
  foreignField: 'teacher'
});

module.exports = mongoose.model('Teacher', TeacherSchema);
