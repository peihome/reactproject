//Validate Name
const validateName = (name) => {
    const response = {
        isValid : true
    };

    if (typeof name !== 'string') {
        response.isValid = false;
        response.message = 'Name must be a string.';
    }

    if (name.trim().length === 0) {
        response.isValid = false;
        response.message = 'Name cannot be empty.';
    }

    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(name)) {
        response.isValid = false;
        response.message = 'Name can only contain letters.';
    }

    return response;
};

//Validate Age
const validateAge = (age) => {
    const response = {
        isValid: true
    };

    age = parseInt(age);

    if (age < 20 || age > 70) {
        response.isValid = false;
        response.message = 'Age must be between 20 and 70.';
        return response;
    }

    return response;
};

//Validate Date
const validateDate = (date) => {
    const response = {
        isValid: true
    };

    if (typeof date !== 'string') {
        response.isValid = false;
        response.message = 'Date must be a string.';
        return response;
    }

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getDate())) {
        response.isValid = false;
        response.message = 'Invalid date format.';
        return response;
    }

    return response;
};

//Validate Title
const validateTitle = (title) => {
    const response = {
        isValid: true
    };

    const validTitles = ['Employee', 'Manager', 'Director', 'VP'];

    if (!validTitles.includes(title)) {
        response.isValid = false;
        response.message = 'Invalid Title.';
        return response;
    }

    return response;
};

//Validate Department
const validateDepartment = (department) => {
    const response = {
        isValid: true
    };

    const validDepartments = ['IT', 'Marketing', 'HR', 'Engineering'];

    if (!validDepartments.includes(department)) {
        response.isValid = false;
        response.message = 'Invalid Department.';
        return response;
    }

    return response;
};

//Validate EmployeeType
const validateEmployeeType = (employeeType) => {
    const response = {
        isValid: true
    };

    const validEmployeeTypes = ['FullTime', 'PartTime', 'Contract', 'Seasonal'];

    if (!validEmployeeTypes.includes(employeeType)) {
        response.isValid = false;
        response.message = 'Invalid Department.';
        return response;
    }

    return response;
};

const handleValidation = (args) => {

    let response = [];
    let validationResponse = "";

    validationResponse = validateName(args.FirstName);
    if(!validationResponse.isValid) {
        response.push(validationResponse.message);
    }

    validationResponse = validateName(args.LastName);
    if(!validationResponse.isValid) {
        response.push(validationResponse.message);
    }

    validationResponse = validateAge(args.Age);
    if(!validationResponse.isValid) {
        response.push(validationResponse.message);
    }

    validationResponse = validateDate(args.DateOfJoining);
    if(!validationResponse.isValid) {
        response.push(validationResponse.message);
    }

    validationResponse = validateTitle(args.Title);
    if(!validationResponse.isValid) {
        response.push(validationResponse.message);
    }

    validationResponse = validateDepartment(args.Department);
    if(!validationResponse.isValid) {
        response.push(validationResponse.message);
    }

    validationResponse = validateEmployeeType(args.EmployeeType);
    if(!validationResponse.isValid) {
        response.push(validationResponse.message);
    }

    return response;
}

module.exports = handleValidation;