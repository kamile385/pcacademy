const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const UserModel = require('../models/user');
const TeacherModel = require('../models/teacher');
const boom = require('boom');

const signUpStrategy = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, createUser);

async function createUser (teacher_name_surname, telephone, email, password, done) {
  try {
    const teacher = await TeacherModel.create({ teacher_name_surname, telephone, email, password });
    done(null, teacher);
  } catch (error) {
    done(error);
  }
};

const loginStrategy = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, loginUser);

async function loginUser (email, password, done) {
  try {
    const user = await TeacherModel.findOne({ email });
    if (!user) {
      done(null, false, { message: 'User not found' });
    }
    const isValid = await user.isValidPassword(password);
    if (!isValid) {
      done(null, false, { message: 'Wrong password' });
    }
    return done(null, user, { message: 'Logged in successfully' });
  } catch (error) {
    done(error);
  }
}

passport.use('signup', signUpStrategy);
passport.use('login', loginStrategy);
