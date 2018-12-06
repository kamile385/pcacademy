const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let ProgramSchema = new Schema({
    name: {type: String, required: true, max: 100},
    group_grade: {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 400}
})

module.exports = mongoose.model('Program', ProgramSchema);