const passport = require('passport');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config');

const Teacher = require('../models/teacher');
const boom = require('boom');

exports.signUp = async function (request, response, next) {
  try {
    response.json({
      message: 'Sign up successful',
      user: request.user
    });
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.login = async function (request, response) {
  passport.authenticate('login', async (error, user, info) => {
    try {
      if (error || !user) {
        response.send(info);
      }

      request.login(user, { session: false }, async (error) => {
        if (error) {
          response.send(error);
        }
        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, CONFIG.JWT_SECRET);
        response.json({ token });
      });
    } catch (err) {
      response.send(err.message);
    }
  })(request, response);
};

exports.getAll = async function (request, response, next) {
  try {
    let teachers = await Teacher.find()
      .populate('students')
      .populate('programs');
    response.send(teachers);
  } catch (error) {
    next(boom.badData(error));
  }
};

// exports.getById = async function (request, response, next) {
//   try {
//     let teachers = await Teacher.findById(request.params.id);
//     response.send(teachers);
//   } catch (error) {
//     next(boom.badData(error));
//   }
// };

// exports.updateById = async function (request, response, next) {
//   try {
//     let teachers = await Teacher.findByIdAndUpdate(request.params.id, request.body, { new: true });
//     const res = {
//       message: 'Teacher updated!',
//       teachers
//     };
//     return response.send(res);
//   } catch (error) {
//     next(boom.badData(error));
//   }
// };

// exports.deleteById = async function (request, response, next) {
//   try {
//     let teachers = await Teacher.findOneAndDelete(request.params.id);
//     const res = {
//       message: 'Teacher successfully deleted!',
//       id: teachers.id
//     };
//     return response.send(res);
//   } catch (error) {
//     next(boom.badData(error));
//   }
// };
