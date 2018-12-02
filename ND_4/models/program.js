const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let GroupSchema = new Schema({
    name: {type: String, required: true, max: 100},
    group_grade: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 400}
})

module.exports = mongoose.model('Group', GroupSchema);