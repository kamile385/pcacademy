const Student = require('../models/student');
const boom = require('boom');

exports.create = async function(request, response, next) {
    try{
        let student = new Student({
            created_at: request.body.created_at,
            student_name_surname: request.body.student_name_surname,
            parent_name_surname: request.body.parent_name_surname,
            address: request.body.address,
            telephone: request.body.telephone,
            email: request.body.email,
            group: request.body.group,
            personal_identification_number: request.body.personal_identification_number,
            teacher: request.body.teacher
        });
    
        let result = await student.save();
        response.send(result);
    } catch(error) {
        next(boom.badData(error));
    }
}

exports.getAll = async function (request, response, next) {
    try {
        let students = await Student.find().populate('teacher');
        response.send(students);
    } catch(error) {
        next(boom.badData(error));
    }
    // Student.find((error, students) => {
    //     response.send(students);
    // })
}

exports.getById = async function (request, response) {
    let students = await Student.findById(request.params.id, error);
    if (error) response.send(error);
    response.send(students);
}

exports.updateById = async function (request, response) {
    let students = await Student.findByIdAndUpdate(request.params.id, request.body, {new: true}, error);
    if (error) response.send(error);
    response.send(students);
}

exports.deleteById = async function (request, response) {
    let students = await Student.findOneAndDelete(request.params.id, error);
    if (error) response.send(error);
        const res = {
            message: "Student successfully deleted",
            id: students.id
        };
    return response.send(res);
}