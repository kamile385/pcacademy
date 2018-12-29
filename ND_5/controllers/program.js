const Program = require('../models/program');
const boom = require('boom');

exports.create = async function (request, response, next) {
  try {
    let program = new Program({
      name: request.body.name,
      group_grade: request.body.group_grade,
      description: request.body.description,
      teacher: request.body.teacher
    });

    let result = await program.save();
    response.send(result);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.getAll = async function (request, response, next) {
  try {
    let programs = await Program.find()
      .populate('teacher')
      .populate('groups');
    response.send(programs);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.getById = async function (request, response, next) {
  try {
    let programs = await Program.findById(request.params.id);
    response.send(programs);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.updateById = async function (request, response, next) {
  try {
    let programs = await Program.findByIdAndUpdate(request.params.id, request.body, { new: true });
    const res = {
      message: 'Program updated!',
      programs
    };
    return response.send(res);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.deleteById = async function (request, response, next) {
  try {
    let programs = await Program.findOneAndDelete(request.params.id);
    const res = {
      message: 'Program successfully deleted!',
      id: programs.id
    };
    return response.send(res);
  } catch (error) {
    next(boom.badData(error));
  }
};
