import React from "react";
import Filter from "./Filter.jsx";

export default class EmployeeTable extends React.Component {
    constructor() {
        super();
        this.state = {
            employees: [],
            filteredEmployees: [],
            pagetitle: 'All Employees',
            filters: {
                title: '',
                department: '',
                employeeType: ''
            }
        };
        this.fetchEmployees = this.fetchEmployees.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    async componentDidMount() {
        if (this.props.employees) {
            const employees = [];
            employees.push(this.props.employees);

            this.setState({
                employees: employees,
                filteredEmployees: employees
            });
        } else {
            await this.fetchEmployees();
        }

        if (this.props.pagetitle) {
            this.setState({
                pagetitle: this.props.pagetitle
            });
        }
    }

    async fetchEmployees() {
        try {
            if(this.props.employees == undefined) {
                const query = `query {
                    getAllEmployees {
                        empId
                        FirstName
                        LastName
                        Age
                        DateOfJoining
                        Title
                        Department
                        EmployeeType
                        CurrentStatus
                    }
                }`;

                const response = await fetch('http://localhost:8000/graphql', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query })
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch employees');
                }

                const result = await response.json();
                const employees = result.data.getAllEmployees;

                this.setState({
                    employees: employees,
                    filteredEmployees: employees
                });
            }else{
                this.setState( { 
                    employees : this.props.employees,
                    filteredEmployees : this.props.employees
                } );   
            }
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    handleFilterChange(e) {
        const { name, value } = e.target;
        this.setState(
            prevState => ({
                filters: {
                    ...prevState.filters,
                    [name]: value
                }
            }),
            this.applyFilters
        );
    }

    applyFilters() {
        const { employees, filters } = this.state;
        const filteredEmployees = employees.filter(employee => {
            return (
                (filters.title === '' || employee.Title === filters.title) &&
                (filters.department === '' || employee.Department === filters.department) &&
                (filters.employeeType === '' || employee.EmployeeType === filters.employeeType)
            );
        });
        this.setState({ filteredEmployees: filteredEmployees });
    }

    render() {
        const rows = this.state.filteredEmployees.map(employee => (
            <EmployeeRow key={employee.empId} employee={employee} />
        ));
        return (
            <>
                <h1> {this.state.pagetitle} </h1>
                <div>
                    {!this.props.isEmployeeDetailFetch && <Filter />}

                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">EmpId</th>
                                <th scope="col">FirstName</th>
                                <th scope="col">LastName</th>
                                <th scope="col">Age</th>
                                <th scope="col">DOJ</th>
                                <th scope="col">Title</th>
                                <th scope="col">Department</th>
                                <th scope="col">EmployeeType</th>
                                <th scope="col">CurrentStatus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

class EmployeeRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.employee.empId}</td>
                <td>{this.props.employee.FirstName}</td>
                <td>{this.props.employee.LastName}</td>
                <td>{this.props.employee.Age}</td>
                <td>{this.props.employee.DateOfJoining}</td>
                <td>{this.props.employee.Title}</td>
                <td>{this.props.employee.Department}</td>
                <td>{this.props.employee.EmployeeType}</td>
                <td>{this.props.employee.CurrentStatus ? "Active" : "Inactive"}</td>
            </tr>
        );
    }
}