/*jshint esversion:6*/
const mongoose = require('mongoose');

const axisSchema = mongoose.Schema({
    name: String,
    description: String,
    weight: Number

});

const Axis = module.exports = mongoose.model('Axis', axisSchema);

module.exports.allAxes = (callback) => {
    Axis.find(callback);
};

module.exports.addAxis = (newAxis, callback) => {
    newAxis.save(callback);
};

module.exports.deleteAxisById = (id, callback) => {
    let query = { _id : id };
    Axis.remove(query, callback);
};