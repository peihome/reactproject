const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employee = new Schema({
    empId: { type: Number },
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Age: { type: Number, required: true },
    DateOfJoining: { type: Date, required: true },
    Title: { type: String, required: true },
    Department: { type: String, required: true },
    EmployeeType: { type: String, required: true },
    CurrentStatus: { type: Boolean, default: true }
});

module.exports = mongoose.model('employee', Employee);