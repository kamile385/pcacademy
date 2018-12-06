const Group = require('../models/group');

exports.create = function(request, response) {
    let group = new Group({
        name: request.body.name,
        group_grade: request.body.group_grade,
        day_of_week: request.body.week_day,
        time_from: request.body.time_from,
        time_to: request.body.time_to
    });

    group.save( () => {
        response.send('Saved!');
    });
}

exports.getAll = function (request, response) {
    Group.find((error, groups) => {
        response.send(groups);
    })
}

exports.getById = function (request, response) {
    Group.findById(request.params.id, (error, groups) => {
        if (error) response.send(error);
        response.send(groups)
    });
}

exports.updateById = function (request, response) {
    Group.findByIdAndUpdate(request.params.id, request.body, {new: true}, (error, groups) => {
        if (error) response.send(error);
        response.send(groups);
    });
}

exports.deleteById = function (request, response) {
    Group.findByIdAndDelete(request.params.id, (error, groups) => {
        if (error) response.send(error);
        const res = {
            message: "Group successfully deleted",
            id: groups.id
        };
        return response.send(res);
    });
}