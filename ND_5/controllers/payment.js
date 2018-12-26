const Payment = require('../models/payment');
const boom = require('boom');

exports.create = async function (request, response, next) {
  try {
    let payment = new Payment({
      month: request.body.month,
      amount: request.body.amount,
      state_financing: request.body.state_financing,
      praise: request.body.praise,
      not_first_year: request.body.not_first_year,
      second_program: request.body.second_program,
      student: request.body.student
    });

    let result = await payment.save();
    response.send(result);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.getAll = async function (request, response, next) {
  try {
    let payments = await Payment.find().populate('student');
    response.send(payments);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.getById = async function (request, response, next) {
  try {
    let payments = await Payment.findById(request.params.id);
    response.send(payments);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.updateById = async function (request, response, next) {
  try {
    let payments = await Payment.findByIdAndUpdate(request.params.id, request.body, { new: true });
    const res = {
      message: 'Payment updated!',
      payments
    };
    return response.send(res);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.deleteById = async function (request, response, next) {
  try {
    let payments = await Payment.findOneAndDelete(request.params.id);
    const res = {
      message: 'Payment successfully deleted!',
      id: payments.id
    };
    return response.send(res);
  } catch (error) {
    next(boom.badData(error));
  }
};
