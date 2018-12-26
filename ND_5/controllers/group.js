const Group = require('../models/group');
const boom = require('boom');

exports.create = async function (request, response, next) {
  try {
    let group = new Group({
      name: request.body.name,
      group_grade: request.body.group_grade,
      day_of_week: request.body.day_of_week,
      time_from: request.body.time_from,
      time_to: request.body.time_to,
      program: request.body.program
    });

    let result = await group.save();
    response.send(result);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.getAll = async function (request, response, next) {
  try {
    let groups = await Group.find().populate('program');
    response.send(groups);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.getById = async function (request, response, next) {
  try {
    let groups = await Group.findById(request.params.id);
    response.send(groups);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.updateById = async function (request, response, next) {
  try {
    let groups = await Group.findByIdAndUpdate(request.params.id, request.body, { new: true });
    const res = {
      message: 'Group updated!',
      groups
    };
    return response.send(res);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.deleteById = async function (request, response, next) {
  try {
    let groups = await Group.findOneAndDelete(request.params.id);
    const res = {
      message: 'Group successfully deleted!',
      id: groups.id
    };
    return response.send(res);
  } catch (error) {
    next(boom.badData(error));
  }
};
