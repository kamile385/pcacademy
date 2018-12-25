const Payment = require('../models/payment');
const boom = require('boom');

exports.create = async function (request, response, next) {
  try {
    let payment = new Payment({
      date: request.body.date,
      amount: request.body.amount
    });

    let result = await payment.save();
    response.send(result);
  } catch (error) {
    next(boom.badData(error));
  }
};

exports.getAll = async function (request, response, next) {
  try {
    let payments = await Payment.find();
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
