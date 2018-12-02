const Program = require('../models/program');

exports.create = function(request, response) {
    let program = new Program({
        name: request.body.name,
        group_grade: request.body.group_grade,
        description: request.body.description
    });

    program.save( () => {
        response.send('Saved!');
    });
}

exports.getAll = function (request, response) {
    Program.find((error, programs) => {
        response.send(programs);
    })
}

exports.getById = function (request, response) {
    Program.findById(request.params.id, (error, programs) => {
        if (error) response.send(error);
        response.send(programs)
    });
}

exports.updateById = function (request, response) {
    Program.findByIdAndUpdate(request.params.id, request.body, {new: true}, (error, programs) => {
        if (error) response.send(error);
        response.send(programs);
    });
}

exports.deleteById = function (request, response) {
    Program.findByIdAndDelete(request.params.id, (error, programs) => {
        if (error) response.send(error);
        const res = {
            message: "Program successfully deleted",
            id: programs.id
        };
        return response.send(res);
    });
}