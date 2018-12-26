const passport = require('passport');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config');

const Teacher = require('../models/teacher');
const boom = require('boom');

exports.create = async function (request, response, next) {
  try {
    let teacher = new Teacher({
      teacher_name_surname: request.body.teacher_name_surname,
      telephone: request.body.telephone,
      email: request.body.email,
      password: request.body.password
    });

    let result = await teacher.save();
    response.send(result);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.signUp = async function (request, response, next) {
  try {
    response.json({
      message: 'Sign up successful',
      teacher: request.teacher
    });
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.login = async function (request, response) {
  passport.authenticate('login', async (error, teacher, info) => {
    try {
      if (error || !teacher) {
        response.send(info);
      }

      request.login(teacher, { session: false }, async (error) => {
        if (error) {
          response.send(error);
        }
        const body = { _id: teacher._id, email: teacher.email };
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

exports.getById = async function (request, response, next) {
  try {
    let teachers = await Teacher.findById(request.params.id);
    response.send(teachers);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.updateById = async function (request, response, next) {
  try {
    let teachers = await Teacher.findByIdAndUpdate(request.params.id, request.body, { new: true });
    const res = {
      message: 'Teacher updated!',
      teachers
    };
    return response.send(res);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.deleteById = async function (request, response, next) {
  try {
    let teachers = await Teacher.findOneAndDelete(request.params.id);
    const res = {
      message: 'Teacher successfully deleted!',
      id: teachers.id
    };
    return response.send(res);
  } catch (error) {
    next(boom.badData(error));
  }
};
