const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const SALT_ROUNDS = 10;

let TeacherSchema = new Schema({
    teacher_name_surname: {type: String, required: true, max: 100},
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
    program: {type: String, required: true, max: 200},
    group: {type: String, required: true, max: 200},
    password: { type: String, required: true }
});

TeacherSchema.pre('save', createHashedPassword);

async function createHashedPassword(next){
    this.password = bcrypt.hash(this.password, SALT_ROUNDS);
    next();
}

// TeacherSchema.methods.comparePassword = function(candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };

module.exports = mongoose.model('Teacher', TeacherSchema);