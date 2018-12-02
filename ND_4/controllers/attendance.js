const Student = require('../models/student');

exports.create = function(request, response) {
    let attendance = new Attendance({
        date: request.body.date,
        status: request.body.status,
        remark: request.body.remark
    });

    attendance.save( () => {
        response.send('Saved!');
    });
}

exports.getAll = function (request, response) {
    Attendance.find((error, attendances) => {
        response.send(attendances);
    })
}

exports.getById = function (request, response) {
    Attendance.findById(request.params.id, (error, attendances) => {
        if (error) response.send(error);
        response.send(attendances)
    });
}

exports.updateById = function (request, response) {
    Attendance.findByIdAndUpdate(request.params.id, request.body, {new: true}, (error, attendances) => {
        if (error) response.send(error);
        response.send(attendances);
    });
}

exports.deleteById = function (request, response) {
    Attendance.findByIdAndDelete(request.params.id, (error, attendances) => {
        if (error) response.send(error);
        const res = {
            message: "Attendance successfully deleted",
            id: attendances.id
        };
        return response.send(res);
    });
}