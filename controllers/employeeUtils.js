const Employee = require('../models/employee');

async function createEmployee(employee) {
    await Employee.create(employee);
}

const employeeUtils = {
    createEmployee: createEmployee
};

module.exports = employeeUtils;