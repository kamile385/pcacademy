const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let AttendanceSchema = new Schema({
    date: {type: Date, default: Date.now, required: true},
    status: {type: String, required: true, max: 1},
    remark: {type: String, max: 400}
})

module.exports = mongoose.model('Attendance', AttendanceSchema);