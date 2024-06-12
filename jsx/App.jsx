class EmployeeDirectory extends React.Component {
    render() {
        return (
            <>
                <Header />
                <main id="main">
                    <EmployeeTable />
                </main>
            </>
        );
    }
}

class Header extends React.Component {

    handleClick = (e) => {
        e.preventDefault();

        const id = e.target.id;

        switch(id) {
            case "allEmployees": 
                ReactDOM.render(<EmployeeTable />, document.getElementById('main'));
                break;
            case "addEmployee": 
                ReactDOM.render(<EmployeeCreate />, document.getElementById('main'));
                break;
        }
    }

    render() {
        return (
            <header>
                <h1>Employee Management</h1>
                <nav>
                    <ul>
                        <li><a href="" onClick={this.handleClick} id="allEmployees">All Employees</a></li>
                        <li><a href="" onClick={this.handleClick} id="addEmployee">Create Employee</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

class EmployeeTable extends React.Component {

    constructor(){
        super();
        this.state = {
            employees : [],
            pagetitle : 'All Employees'
        }
        this.fetchEmployees = this.fetchEmployees.bind(this);
    }

    async componentDidMount() {
        await this.fetchEmployees();
    }

    async fetchEmployees() {

        try {

            if(this.props.pagetitle != undefined) {
                this.state.pagetitle = this.props.pagetitle;
            }

            if(this.props.employees == undefined) {
                const query = `query {
                    getAllEmployees {
                        id
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
    
                const response = await fetch('/graphql', {
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
                                <th scope="col">FirstName</th>
                                <th scope="col">LastName</th>
                                <th scope="col">Age</th>
                                <th scope="col">DateOfJoining</th>
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
            <tr>
                <td>{this.props.employee.FirstName}</td>
                <td>{this.props.employee.LastName}</td>
                <td>{this.props.employee.Age}</td>
                <td>{this.props.employee.DateOfJoining}</td>
                <td>{this.props.employee.Title}</td>
                <td>{this.props.employee.Department}</td>
                <td>{this.props.employee.EmployeeType}</td>
                <td>{ this.props.employee.CurrentStatus == true ? "Active" : "Inactive"}</td>
            </tr>
        );
    }
}

class EmployeeCreate extends React.Component {

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

    handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if(name == 'CurrentStatus'){
            if(value == true || value == 1 || value == "true") {
                value = true;
            }else{
                value = false;
            }
        }

        this.setState(prevState => ({
            employee: {
                ...prevState.employee,
                [name]: value
            }
        }));
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

            const response = await fetch('/graphql', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({query: mutation})
            });

            if (!response.ok) {
                throw new Error('Failed to create employee');
            }

            const employeeResponse = await response.json();
            console.log(employeeResponse);

            this.setState({ employee: employeeResponse.data.createEmployee });
        } catch (error) {
            console.log(error);
            this.setState({ error: error.message });
        }
    }
    
    render() {
        return (
            <>
            <h1> {this.state.pagetitle} </h1>
                <form onSubmit={this.createEmployee}>
                    <div className="form-group">
                        <label htmlFor="FirstName">First Name:</label>
                        <input type="text" id="FirstName" name="FirstName" className="form-control" value={this.state.employee.FirstName} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="LastName">Last Name:</label>
                        <input type="text" id="LastName" name="LastName" className="form-control" value={this.state.employee.LastName} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Age">Age:</label>
                        <input type="number" id="Age" name="Age" className="form-control" value={this.state.employee.Age} onChange={this.handleChange} min="20" max="70" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="DateOfJoining">Date of Joining:</label>
                        <input type="date" id="DateOfJoining" name="DateOfJoining" className="form-control" value={this.state.employee.DateOfJoining} onChange={this.handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Title">Title:</label>
                        <select name="Title" id="Title" className="form-control" value={this.state.employee.Title} onChange={this.handleChange} required>
                            <option value="" disabled>Select Title</option>
                            <option value="Employee">Employee</option>
                            <option value="Manager">Manager</option>
                            <option value="Director">Director</option>
                            <option value="VP">VP</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Department">Department:</label>
                        <select id="Department" name="Department" className="form-control" value={this.state.employee.Department} onChange={this.handleChange} required>
                            <option value="" disabled>Select Department</option>
                            <option value="IT">IT</option>
                            <option value="Marketing">Marketing</option>
                            <option value="HR">HR</option>
                            <option value="Engineering">Engineering</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="EmployeeType">Employee Type:</label>
                        <select id="EmployeeType" name="EmployeeType" className="form-control" value={this.state.employee.EmployeeType} onChange={this.handleChange} required>
                            <option value="" disabled>Select Employee Type</option>
                            <option value="FullTime">Full Time</option>
                            <option value="PartTime">Part Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Seasonal">Seasonal</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg btn-block">{this.state.pagetitle}</button>
                </form>
            </>
        );
    }
}

ReactDOM.render(<EmployeeDirectory />, document.getElementById('contents'));