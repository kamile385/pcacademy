const Payment = require('../models/payment');

exports.create = function(request, response) {
    let payment = new Payment({
        date: request.body.date,
        amount: request.body.amount
    });

    payment.save( () => {
        response.send('Saved!');
    });
}

exports.getAll = function (request, response) {
    Payment.find((error, payments) => {
        response.send(payments);
    })
}

exports.getById = function (request, response) {
    Payment.findById(request.params.id, (error, programs) => {
        if (error) response.send(error);
        response.send(programs)
    });
}

exports.updateById = function (request, response) {
    Payment.findByIdAndUpdate(request.params.id, request.body, {new: true}, (error, payments) => {
        if (error) response.send(error);
        response.send(payments);
    });
}

exports.deleteById = function (request, response) {
    Payment.findByIdAndDelete(request.params.id, (error, payments) => {
        if (error) response.send(error);
        const res = {
            message: "Payment successfully deleted",
            id: payments.id
        };
        return response.send(res);
    });
}