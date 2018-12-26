const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const CONFIG = require('../config');

const SALT_ROUNDS = 10;

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

TeacherSchema.virtual('programs', {
  ref: 'Program',
  localField: '_id',
  foreignField: 'teacher'
});

TeacherSchema.pre('save', createHashedPassword);

async function createHashedPassword (next) {
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  next();
}

TeacherSchema.methods.isValidPassword = async function (password) {
  let validation = await bcrypt.compare(password, this.password);
  return validation;
};

module.exports = mongoose.model('Teacher', TeacherSchema);
