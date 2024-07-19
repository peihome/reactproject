import React from "react";

export default class EmployeeTable extends React.Component {

    constructor(){
        super();
        this.state = {
            employees : [],
            pagetitle : 'All Employees'
        }
        this.fetchEmployees = this.fetchEmployees.bind(this);
    }

    async componentDidMount() {
        if(this.props.employees) {
            const employees = [];
            employees.push(this.props.employees);

            this.setState({
                employees: employees
            });
        }else {
            await this.fetchEmployees();
        }


        if(this.props.pagetitle) {
            this.setState({
                pagetitle: this.props.pagetitle
            });
        }
    }

    async fetchEmployees() {

        try {

            if(this.props.pagetitle != undefined) {
                this.state.pagetitle = this.props.pagetitle;
            }

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
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({query})
                });
    
                if (!response.ok) {
                    throw new Error('Failed to fetch employees');
                }
                const employees = await response.json();
                this.setState({ employees: employees.data.getAllEmployees });
            }else{
                this.setState( { employees : this.props.employees } );   
            }

        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    render() {
        const rows = this.state.employees.map(employee => <EmployeeRow employee = {employee} />);
        return(
            <>
            <h1> {this.state.pagetitle} </h1>
            <div>
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
        return(
            <tr key={this.props.employee.empId}>
                <td>{this.props.employee.empId}</td>
                <td>{this.props.employee.FirstName}</td>
                <td>{this.props.employee.LastName}</td>
                <td>{this.props.employee.Age}</td>
                <td>{this.props.employee.DateOfJoining}</td>
                <td>{this.props.employee.Title}</td>
                <td>{this.props.employee.Department}</td>
                <td>{this.props.employee.EmployeeType}</td>
                <td>{this.props.employee.CurrentStatus == true ? "Active" : "Inactive"}</td>
            </tr>
        );
    }
}