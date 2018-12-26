const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let ProgramSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  group_grade: { type: String, required: true, max: 100 },
  description: { type: String, max: 400 },
  teacher: { type: Schema.Types.ObjectId, ref: 'Teacher', required: true }
}, { toJSON: { virtuals: true } });

ProgramSchema.virtual('groups', {
  ref: 'Group',
  localField: '_id',
  foreignField: 'program'
});

module.exports = mongoose.model('Program', ProgramSchema);
