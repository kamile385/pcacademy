const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const UserModel = require('../models/user');
const TeacherModel = require('../models/teacher');
const boom = require('boom');

const signUpStrategy = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, createUser);

async function createUser (req, email, password, done) {
  try {
    let teacher_name_surname = req.body.teacher_name_surname;
    let telephone = req.body.telephone;
    const user = await TeacherModel.create({ teacher_name_surname, telephone, email, password });
    done(null, user);
  } catch (error) {
    done(boom.badData(error));
  }
}

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
    done(boom.badData(error));
  }
}

passport.use('signup', signUpStrategy);
passport.use('login', loginStrategy);
