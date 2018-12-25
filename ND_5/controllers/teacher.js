const Teacher = require('../models/teacher');
const boom = require('boom');

exports.create = async function (request, response, next) {
  try {
    let teacher = new Teacher({
      teacher_name_surname: request.body.teacher_name_surname,
      telephone: request.body.telephone,
      email: request.body.email,
      program: request.body.program,
      group: request.body.group,
      password: request.body.password
    });

    let result = await teacher.save();
    response.send(result);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.getAll = async function (request, response, next) {
  try {
    let teachers = await Teacher.find().populate('students');
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
