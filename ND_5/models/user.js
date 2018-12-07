const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const SALT_ROUNDS = 10;

let UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

UserSchema.pre('save', createHashedPassword);

async function createHashedPassword(next) {
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    next();
}

UserSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);