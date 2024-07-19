import React from "react";
import { handleValidation } from "./validator.js";
import Alert from "./Alert.jsx";
import EmployeeDelete from "./EmployeeDelete.jsx";

export default class EmployeeCreate extends React.Component {

    constructor() {
        super();
        this.state = {
            employee : {
                FirstName: '',
                LastName: '',
                Age: '',
                DateOfJoining: '',
                Title: '',
                Department: '',
                EmployeeType: '',
                CurrentStatus: ''
            },
            pagetitle : 'Create Employee',
            employeeId : ''
        }
    }

    componentDidMount() {
        this.setPageDefaults();
    }

    setPageDefaults = () => {
        if(this.props.pagetitle != undefined) {
            this.setState({pagetitle : this.props.pagetitle});
        }

        if(this.props.employeeId != undefined) {
            this.setState({employeeId : this.props.employeeId });
        }

        if(this.props.employee != undefined) {
            this.setState({
                employee: this.props.employee
            });
        }

    }

    handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        handleValidation(name, value);

        this.setState(prevState => ({
            employee: {
                ...prevState.employee,
                [name]: value
            }
        }));
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        if(this.props.deleteEmployee){
            this.props.handleDeleteClick(this.state.employeeId);
        }
        else if(this.props.updateEmployee) {
            const employee = await this.props.updateEmployee(this.state.employee);
            this.setState({
                employee: employee
            });
        } 
        else {
            await this.createEmployee(e);
        }

    }

    createEmployee = async (e) => {
        e.preventDefault();

        try {
            const employee = this.state.employee;
            const mutation = `
                mutation {
                    createEmployee(
                        FirstName: "${employee.FirstName}",
                        LastName: "${employee.LastName}",
                        Age: ${employee.Age},
                        DateOfJoining: "${employee.DateOfJoining}",
                        Title: "${employee.Title}",
                        Department: "${employee.Department}",
                        EmployeeType: "${employee.EmployeeType}"
                    ) {
                        FirstName
                        LastName
                        Age
                        DateOfJoining
                        Title
                        Department
                        EmployeeType
                    }
                }
            `;

            const response = await fetch('http://localhost:8000/graphql', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({query: mutation})
            });

            if (!response.ok) {
                throw new Error('Failed to create employee');
            }

            this.setState({
                employee : {
                    FirstName: '',
                    LastName: '',
                    Age: '',
                    DateOfJoining: '',
                    Title: '',
                    Department: '',
                    EmployeeType: ''
                },
                showAlert: true,
                alertMessage: "Successfully added employee record!",
                result: true
            });

            this.resetAlert();

        } catch (error) {
            console.log(error);
            this.setState({ 
                showAlert: true,
                alertMessage: error.message,
                result: false
            });

            this.resetAlert();
        }
    }

    resetAlert = () => {
        clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.setState({ showAlert: false });
                clearTimeout(this.timeout);
            }, 4000);
    }
    
    render() {
        return (
            <>
            {this.state.showAlert && <Alert message={this.state.alertMessage} result={this.state.result} />}

            {this.props.deleteEmployee && this.state.employeeId === '' ? (
                <EmployeeDelete />
            ) : (
                <>
                <h1> {this.state.pagetitle} </h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="FirstName" className={!(this.props.deleteEmployee || this.props.updateEmployee) ? "required" : ""} >First Name</label>
                        <input type="text" id="FirstName" name="FirstName" className="form-control" value={this.state.employee.FirstName} onChange={this.handleChange} {...((this.props.deleteEmployee || this.props.updateEmployee) ? { disabled: true } : { required: true }) }/>
                        <div className='invalid-feedback'></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="LastName" className={!(this.props.deleteEmployee || this.props.updateEmployee) ? "required" : ""} >Last Name</label>
                        <input type="text" id="LastName" name="LastName" className="form-control" value={this.state.employee.LastName} onChange={this.handleChange} {...((this.props.deleteEmployee || this.props.updateEmployee) ? { disabled: true } : { required: true }) } />
                        <div className='invalid-feedback'></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Age" className={!(this.props.deleteEmployee || this.props.updateEmployee) ? "required" : ""} >Age</label>
                        <input type="number" id="Age" name="Age" className="form-control" value={this.state.employee.Age} onChange={this.handleChange} min="20" max="70" {...((this.props.deleteEmployee || this.props.updateEmployee) ? { disabled: true } : { required: true }) } />
                        <div className='invalid-feedback'></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="DateOfJoining" className={!(this.props.deleteEmployee || this.props.updateEmployee) ? "required" : ""} >Date of Joining</label>
                        <input type="date" id="DateOfJoining" name="DateOfJoining" className="form-control" value={this.state.employee.DateOfJoining} onChange={this.handleChange} {...((this.props.deleteEmployee || this.props.updateEmployee) ? { disabled: true } : { required: true }) } />
                        <div className='invalid-feedback'></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Title" className={!(this.props.deleteEmployee || this.props.updateEmployee) ? "required" : ""} >Title</label>
                        <select name="Title" id="Title" className="form-control" value={this.state.employee.Title} onChange={this.handleChange} {...(this.props.deleteEmployee ? { disabled: true } : { required: true }) }>
                            <option value="" disabled>Select Title</option>
                            <option value="Employee">Employee</option>
                            <option value="Manager">Manager</option>
                            <option value="Director">Director</option>
                            <option value="VP">VP</option>
                        </select>
                        <div className='invalid-feedback'></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Department" className={!(this.props.deleteEmployee || this.props.updateEmployee) ? "required" : ""} >Department</label>
                        <select id="Department" name="Department" className="form-control" value={this.state.employee.Department} onChange={this.handleChange} {...(this.props.deleteEmployee ? { disabled: true } : { required: true }) }>
                            <option value="" disabled>Select Department</option>
                            <option value="IT">IT</option>
                            <option value="Marketing">Marketing</option>
                            <option value="HR">HR</option>
                            <option value="Engineering">Engineering</option>
                        </select>
                        <div className='invalid-feedback'></div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="EmployeeType" className={!(this.props.deleteEmployee || this.props.updateEmployee) ? "required" : ""} >Employee Type</label>
                        <select id="EmployeeType" name="EmployeeType" className="form-control" value={this.state.employee.EmployeeType} onChange={this.handleChange} {...(this.props.deleteEmployee ? { disabled: true } : { required: true }) }>
                            <option value="" disabled>Select Employee Type</option>
                            <option value="FullTime">Full Time</option>
                            <option value="PartTime">Part Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Seasonal">Seasonal</option>
                        </select>
                        <div className='invalid-feedback'></div>
                    </div>

                    {
                    this.props.updateEmployee ? (
                        <div className="form-group">
                            <label htmlFor="CurrentStatus" className={!(this.props.deleteEmployee || this.props.updateEmployee) ? "required" : ""} >Current Status</label>
                            <select id="CurrentStatus" name="CurrentStatus" className="form-control" value={this.state.employee.CurrentStatus} onChange={this.handleChange} {...(this.props.deleteEmployee ? { disabled: true } : { required: true }) }>
                                <option value="" disabled>Select Current Status</option>
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
                            </select>
                            <div className='invalid-feedback'></div>
                        </div>
                        ) : null
                    }

                    <button type="submit" className="btn btn-primary btn-lg btn-block">{this.state.pagetitle}</button>
                </form>
                </>
            )}
            </>
        );
    }
}