const Student = require('../models/student');

exports.create = function(request, response) {
    let student = new Student({
        created_at: request.body.created_at,
        student_name_surname: request.body.student_name_surname,
        parent_name_surname: request.body.parent_name_surname,
        address: request.body.address,
        telephone: request.body.telephone,
        email: request.body.email,
        group: request.body.group,
        personal_identification_number: request.body.personal_identification_number
    });

    student.save( () => {
        response.send('Saved!');
    });
}

exports.getAll = function (request, response) {
    Student.find((error, students) => {
        response.send(students);
    })
}

exports.getById = function (request, response) {
    Student.findById(request.params.id, (error, students) => {
        if (error) response.send(error);
        response.send(students)
    });
}

exports.updateById = function (request, response) {
    Student.findByIdAndUpdate(request.params.id, request.body, {new: true}, (error, students) => {
        if (error) response.send(error);
        response.send(students);
    });
}

exports.deleteById = function (request, response) {
    Student.findByIdAndDelete(request.params.id, (error, students) => {
        if (error) response.send(error);
        const res = {
            message: "Student successfully deleted",
            id: students.id
        };
        return response.send(res);
    });
}