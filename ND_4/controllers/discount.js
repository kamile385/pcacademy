const Discount = require('../models/discount');

exports.create = function(request, response) {
    let discount = new Discount({
        state_financing: request.body.state_financing,
        praise: request.body.praise,
        not_first_year: request.body.not_first_year,
        second_program: request.body.second_program
    });

    discount.save( () => {
        response.send('Saved!');
    });
}

exports.getAll = function (request, response) {
    Discount.find((error, discounts) => {
        response.send(discounts);
    })
}

exports.getById = function (request, response) {
    Discount.findById(request.params.id, (error, discounts) => {
        if (error) response.send(error);
        response.send(discounts)
    });
}

exports.updateById = function (request, response) {
    Discount.findByIdAndUpdate(request.params.id, request.body, {new: true}, (error, discounts) => {
        if (error) response.send(error);
        response.send(discounts);
    });
}

exports.deleteById = function (request, response) {
    Discount.findByIdAndDelete(request.params.id, (error, discounts) => {
        if (error) response.send(error);
        const res = {
            message: "Discount successfully deleted",
            id: discounts.id
        };
        return response.send(res);
    });
}