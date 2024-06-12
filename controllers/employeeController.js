const Employee = require("../models/employee");

module.exports = async (req, res) => {
    if(req.method == "GET"){
        return res.json( await getEmployees() );
    } else if(req.method == "POST"){
        return res.json( await addEmployee( req.body ) );
    } else if(req.method == "PUT"){
        return res.json( await updateEmployee( req.params.id, req.body ));
    }

    return res.json({});
}

async function getEmployees(employeeId){
    if(employeeId == undefined){
        const employees = await Employee.find({});
        console.log( "hi da " + employees);
        return employees;
    }
}

async function addEmployee(employee){
    const result = {
        status : 'success'
    };

    try{
        console.log(employee);
        await Employee.create(employee)
    }catch(e){
        result.status = 'failure';
    }

    return result;
}

async function updateEmployee(id, employee){
    const result = {
        status : 'success'
    };

    try{
        console.log(employee);
        const employeeData = {
            DateOfJoining: employee.DateOfJoining,
            Title: employee.Title,
            Department: employee.Department,
            EmployeeType: employee.EmployeeType,
            CurrentStatus: employee.CurrentStatus
        };
        await Employee.findOneAndUpdate({'_id' : id}, employeeData);
    }catch(e){
        result.status = 'failure';
    }

    return result;
}