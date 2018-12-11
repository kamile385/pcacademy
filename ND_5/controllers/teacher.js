const Teacher = require('../models/teacher');

exports.create = async function(request, response) {
    try {
    let teacher = new Teacher({
        teacher_name_surname: request.body.teacher_name_surname,
        telephone: request.body.telephone,
        email: request.body.email,
        program: request.body.program,
        group: request.body.group
    });

    let result = await teacher.save();
    response.send(result);
    } catch(error) {
        next(boom.badData(error));
    }
}

exports.getAll = async function (request, response) {
    let teachers = await Teacher.find().populate('students');
    response.send(teachers);
}

exports.getById = async function (request, response) {
    let teachers = await Teacher.findById(request.params.id, error);
    if (error) response.send(error);
    response.send(teachers);
}

exports.updateById = async function (request, response) {
    let teachers = await Teacher.findByIdAndUpdate(request.params.id, request.body, {new: true}, error);
    if (error) response.send(error);
    response.send(teachers);
}

exports.deleteById = async function (request, response) {
    let teachers = await Teacher.findOneAndDelete(request.params.id, error);
    if (error) response.send(error);
        const res = {
            message: "Teacher successfully deleted",
            id: teachers.id
        };
    return response.send(res);
}