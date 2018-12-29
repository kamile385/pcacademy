const Student = require('../models/student');
const boom = require('boom');

exports.create = async function (request, response, next) {
  try {
    let student = new Student({
      student_name_surname: request.body.student_name_surname,
      parent_name_surname: request.body.parent_name_surname,
      address: request.body.address,
      telephone: request.body.telephone,
      email: request.body.email,
      group: request.body.group,
      identification_number: request.body.identification_number,
      teacher: request.body.teacher
    });

    let result = await student.save();
    response.send(result);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.getAll = async function (request, response, next) {
  try {
    let students = await Student.find()
      .populate('teacher')
      .populate('attendances')
      .populate('payments');
    response.send(students);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.getById = async function (request, response, next) {
  try {
    let students = await Student.findById(request.params.id);
    response.send(students);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.updateById = async function (request, response, next) {
  try {
    let students = await Student.findByIdAndUpdate(request.params.id, request.body, { new: true });
    const res = {
      message: 'Student updated!',
      students
    };
    return response.send(res);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.deleteById = async function (request, response, next) {
  try {
    let students = await Student.findOneAndDelete(request.params.id);
    const res = {
      message: 'Student successfully deleted!',
      id: students.id
    };
    return response.send(res);
  } catch (error) {
    next(boom.badData(error));
  }
};
