const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    created_at: {type: Date, default: Date.now, required: true},
    student_name_surname: {type: String, required: true, max: 100},
    parent_name_surname: {type: String, required: true, max: 100},
    address: {type: String, required: true, max: 100},
    telephone: {
        type: String, 
        required: true, 
        match: [/^[+]3706[0-9]{7}$/, 'Please fill a valid phone number: +370...'],
        max: 12
    },
    email: {
        type: String, 
        trim: true, 
        lowercase: true, 
        required: true, 
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique: true,
        max: 100
    },
    group: {type: String, required: true, max: 200},
    personal_identification_number: {
        type: String, 
        match: [/^([\d\-]{11})$/, 'Please fill a valid personal identification number'], 
        required: true
    },
    teacher: {type: Schema.Types.ObjectId, ref: 'Teacher', required: true}
})

module.exports = mongoose.model('Student', StudentSchema);