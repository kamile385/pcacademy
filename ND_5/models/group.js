const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let GroupSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  group_grade: { type: Number, required: true, max: 12 },
  day_of_week: { type: String, required: true, max: 100 },
  time_from: { type: String, required: true, max: 5 },
  time_to: { type: String, required: true, max: 5 }
});

module.exports = mongoose.model('Group', GroupSchema);
