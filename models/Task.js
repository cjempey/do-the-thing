/*jshint esversion:6*/
const mongoose = require('mongoose');

const taskValueSchema = mongoose.Schema({
    axis: mongoose.Schema.ObjectId,
    value: Number
});
const taskSchema = mongoose.Schema({
    name: String,
    description: String,
    status: {
        type: String,
        index: true,
        enum: [
            'Not Started',
            'Deferred',
            'In Progress',
            'Blocked',
            'Complete'
        ]
    },
    values: [taskValueSchema]

});

const Task = module.exports = mongoose.model('Task', taskSchema);

module.exports.allTasks = (callback) => {
    Task.find(callback);
};

module.exports.fetchTaskById = (id, callback) => {
    let query = { _id : id };
    // console.log ('Model call to Task.fetchTaskById');
    Task.find(query, callback);
};

module.exports.incompleteTasks = (callback) => {
    Task.find({ status: { $ne: 'Complete'}}, callback);
};

module.exports.completeTasks = (callback) => {
    Task.find({ status: 'Complete' }, callback);
};

module.exports.addTask = (newTask, callback) => {
    newTask.save(callback);
};

module.exports.updateTask = (newTask, callback) => {
    let id = newTask._id;
    Task.findOne( { _id: id }, (err, task) => {
        if (err) {
            callback(JSON.stringify( { success: false, message: `Failed to update task. Error: ${err}` }), null);
            return;
        }
        
        task.name = newTask.name;
        task.description = newTask.description;
        task.status = newTask.status;
        task.values = newTask.values;

        task.save( callback );
    });
};

module.exports.deleteTaskById = (id, callback) => {
    let query = { _id : id };
    Task.remove(query, callback);
};