const Attendance = require('../models/attendance');
const boom = require('boom');

exports.create = async function(request, response, next) {
    try{
        let attendance = new Attendance({
            date: request.body.date,
            status: request.body.status,
            remark: request.body.remark
        });

        let result = await attendance.save();
        response.send(result);
    } catch(error) {
        next(boom.badData(error));
    }
}

exports.getAll = async function (request, response, next) {
    try {
        let attendances = await Attendance.find();
        response.send(attendances);
    } catch(error) {
        next(boom.badData(error));
    }
}

exports.getById = async function (request, response, next) {
    try {
        let attendances = await Attendance.findById(request.params.id);
        response.send(attendances);
    } catch(error) {
        next(boom.badData(error));
    }
}

exports.updateById = async function (request, response, next) {
    try {
        let attendances = await Attendance.findByIdAndUpdate(request.params.id, request.body, {new: true});
        const res = {
            message: "Attendance updated!",
            attendances
        };
        return response.send(res);
    } catch(error) {
        next(boom.badData(error));
    }
}

exports.deleteById = async function (request, response, next) {
    try {
        let attendances = await Attendance.findOneAndDelete(request.params.id);
        const res = {
            message: "Attendance successfully deleted!",
            id: attendances.id
        };
        return response.send(res);
    } catch(error) {
        next(boom.badData(error));
    }
}