const Discount = require('../models/discount');
const boom = require('boom');

exports.create = async function (request, response, next) {
  try {
    let discount = new Discount({
      state_financing: request.body.state_financing,
      praise: request.body.praise,
      not_first_year: request.body.not_first_year,
      second_program: request.body.second_program
    });

    let result = await discount.save();
    response.send(result);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.getAll = async function (request, response, next) {
  try {
    let discounts = await Discount.find();
    response.send(discounts);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.getById = async function (request, response, next) {
  try {
    let discounts = await Discount.findById(request.params.id);
    response.send(discounts);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.updateById = async function (request, response, next) {
  try {
    let discounts = await Discount.findByIdAndUpdate(request.params.id, request.body, { new: true });
    const res = {
      message: 'Discount updated!',
      discounts
    };
    return response.send(res);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.deleteById = async function (request, response, next) {
  try {
    let discounts = await Discount.findByIdAndDelete(request.params.id);
    const res = {
      message: 'Discount successfully deleted!',
      id: discounts.id
    };
    return response.send(res);
  } catch (error) {
    next(boom.badData(error));
  }
};
