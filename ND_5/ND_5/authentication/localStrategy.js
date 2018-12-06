const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const TeacherModel = require('../models/teacher');

const signUpStrategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, createTeacher);

async function createTeacher(email, password, done) {
    try {
        const teacher = await TeacherModel.create({email, password});
        done(null, teacher);
    } catch(error) {
        done(error);
    }
}

passport.use('signup', signUpStrategy);