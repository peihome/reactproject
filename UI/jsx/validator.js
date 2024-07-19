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

    const regex = /^[a-zA-Z ]+$/;
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

export const handleValidation = (name, value) => {

    let response = {};

    switch(name) {
        case 'FirstName':
            response = validateName(value);
            break;
        case 'LastName':
            response = validateName(value);
            break;
        case 'Age':
            response = validateAge(value);
            break;
        case 'DateOfJoining':
            response = validateDate(value);
            break;
        case 'Title':
            response = validateTitle(value);
            break;
        case 'Department':
            response = validateDepartment(value);
            break;
        case 'EmployeeType':
            response = validateEmployeeType(value);
            break;
        default:
            return { isValid: false, message: 'Invalid field name' };
    }

    const element = $(`#${name}`);
    if(!response.isValid){
        element.removeClass('is-invalid');
        element.addClass('is-invalid');
        element.siblings('div').text(response.message);
    }else {
        element.removeClass('is-invalid');
        element.siblings('div').text('');
    }

    return response;
}