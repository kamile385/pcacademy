const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user');

const signUpStrategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, createUser);

async function createUser (email, password, done) {
    try {
        const user = await UserModel.create({email, password});
        done(null, user);

    } catch(error) {
        done(error);
    }
}

passport.use('signup', signUpStrategy);