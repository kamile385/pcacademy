const Teacher = require('../models/teacher');

exports.create = function(request, response) {
    let teacher = new Teacher({
        teacher_name_surname: request.body.teacher_name_surname,
        telephone: request.body.telephone,
        email: request.body.email,
        program: request.body.program,
        group: request.body.group
    });

    teacher.save( () => {
        response.send('Saved!');
    });
}

exports.getAll = function (request, response) {
    Teacher.find((error, teachers) => {
        response.send(teachers);
    })
}

exports.getById = function (request, response) {
    Teacher.findById(request.params.id, (error, teachers) => {
        if (error) response.send(error);
        response.send(teachers)
    });
}

exports.updateById = function (request, response) {
    Teacher.findByIdAndUpdate(request.params.id, request.body, {new: true}, (error, teachers) => {
        if (error) response.send(error);
        response.send(teachers);
    });
}

exports.deleteById = function (request, response) {
    Teacher.findByIdAndDelete(request.params.id, (error, teachers) => {
        if (error) response.send(error);
        const res = {
            message: "Teacher successfully deleted",
            id: teachers.id
        };
        return response.send(res);
    });
}