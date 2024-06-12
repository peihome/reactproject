class EmployeeDirectory extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("main", {
      id: "main"
    }, /*#__PURE__*/React.createElement(EmployeeTable, null)));
  }
}
class Header extends React.Component {
  handleClick = e => {
    e.preventDefault();
    const id = e.target.id;
    switch (id) {
      case "allEmployees":
        ReactDOM.render( /*#__PURE__*/React.createElement(EmployeeTable, null), document.getElementById('main'));
        break;
      case "addEmployee":
        ReactDOM.render( /*#__PURE__*/React.createElement(EmployeeCreate, null), document.getElementById('main'));
        break;
      default:
        ReactDOM.render( /*#__PURE__*/React.createElement(EmployeeDirectory, null), document.getElementById('contents'));
    }
  };
  render() {
    return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h1", null, "Employee Management"), /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "",
      onClick: this.handleClick,
      id: "allEmployees"
    }, "All Employees")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "",
      onClick: this.handleClick,
      id: "addEmployee"
    }, "Create Employee")))));
  }
}
class EmployeeTable extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      pagetitle: 'All Employees'
    };
    this.fetchEmployees = this.fetchEmployees.bind(this);
  }
  async componentDidMount() {
    await this.fetchEmployees();
  }
  async fetchEmployees() {
    try {
      if (this.props.pagetitle != undefined) {
        this.state.pagetitle = this.props.pagetitle;
      }
      if (this.props.employees == undefined) {
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
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query
          })
        });
        if (!response.ok) {
          throw new Error('Failed to fetch employees');
        }
        const employees = await response.json();
        this.setState({
          employees: employees.data.getAllEmployees
        });
      } else {
        this.setState({
          employees: this.props.employees
        });
      }
    } catch (error) {
      this.setState({
        error: error.message
      });
    }
  }
  render() {
    const rows = this.state.employees.map(employee => /*#__PURE__*/React.createElement(EmployeeRow, {
      employee: employee
    }));
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, " ", this.state.pagetitle, " "), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
      className: "table table-hover"
    }, /*#__PURE__*/React.createElement("thead", {
      className: "thead-dark"
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "FirstName"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "LastName"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Age"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "DateOfJoining"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Title"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Department"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "EmployeeType"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "CurrentStatus"))), /*#__PURE__*/React.createElement("tbody", null, rows))));
  }
}
class EmployeeRow extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, this.props.employee.FirstName), /*#__PURE__*/React.createElement("td", null, this.props.employee.LastName), /*#__PURE__*/React.createElement("td", null, this.props.employee.Age), /*#__PURE__*/React.createElement("td", null, this.props.employee.DateOfJoining), /*#__PURE__*/React.createElement("td", null, this.props.employee.Title), /*#__PURE__*/React.createElement("td", null, this.props.employee.Department), /*#__PURE__*/React.createElement("td", null, this.props.employee.EmployeeType), /*#__PURE__*/React.createElement("td", null, this.props.employee.CurrentStatus == true ? "Active" : "Inactive"));
  }
}
class EmployeeCreate extends React.Component {
  constructor() {
    super();
    this.state = {
      employee: {
        FirstName: '',
        LastName: '',
        Age: '',
        DateOfJoining: '',
        Title: '',
        Department: '',
        EmployeeType: '',
        CurrentStatus: ''
      },
      pagetitle: 'Create Employee',
      employeeId: ''
    };
    this.setPageDefaults = this.setPageDefaults.bind(this);
  }
  async componentDidMount() {
    await this.setPageDefaults();
  }
  async setPageDefaults() {
    if (this.props.pagetitle != undefined) {
      this.setState({
        pagetitle: this.props.pagetitle
      });
    }
    if (this.props.employeeId != undefined) {
      this.setState({
        employeeId: this.props.employeeId
      });
      await this.fetchEmployeeById(this.state.employeeId);
    }
  }
  async fetchEmployeeById(id) {
    try {
      if (this.props.employees == undefined) {
        const query = `query {
                    getEmployeeById {
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
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query
          })
        });
        if (!response.ok) {
          throw new Error('Failed to fetch employees');
        }
        const employees = await response.json();
        this.setState({
          employees: employees.data.getAllEmployees
        });
      } else {
        this.setState({
          employees: this.props.employees
        });
      }
    } catch (error) {
      this.setState({
        error: error.message
      });
    }
  }
  handleChange = e => {
    const name = e.target.name;
    let value = e.target.value;
    if (name == 'CurrentStatus') {
      if (value == true || value == 1 || value == "true") {
        value = true;
      } else {
        value = false;
      }
    }
    this.setState(prevState => ({
      employee: {
        ...prevState.employee,
        [name]: value
      }
    }));
  };
  createEmployee = async e => {
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
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: mutation
        })
      });
      if (!response.ok) {
        throw new Error('Failed to create employee');
      }
      const employeeResponse = await response.json();
      console.log(employeeResponse);
      this.setState({
        employee: employeeResponse.data.createEmployee
      });
    } catch (error) {
      console.log(error);
      this.setState({
        error: error.message
      });
    }
  };
  handleSubmit = async e => {
    await createEmployee(e);
  };
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, " ", this.state.pagetitle, " "), /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "FirstName"
    }, "First Name:"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "FirstName",
      name: "FirstName",
      className: "form-control",
      value: this.state.employee.FirstName,
      onChange: this.handleChange,
      required: true
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "LastName"
    }, "Last Name:"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "LastName",
      name: "LastName",
      className: "form-control",
      value: this.state.employee.LastName,
      onChange: this.handleChange,
      required: true
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "Age"
    }, "Age:"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      id: "Age",
      name: "Age",
      className: "form-control",
      value: this.state.employee.Age,
      onChange: this.handleChange,
      min: "20",
      max: "70",
      required: true
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "DateOfJoining"
    }, "Date of Joining:"), /*#__PURE__*/React.createElement("input", {
      type: "date",
      id: "DateOfJoining",
      name: "DateOfJoining",
      className: "form-control",
      value: this.state.employee.DateOfJoining,
      onChange: this.handleChange,
      required: true
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "Title"
    }, "Title:"), /*#__PURE__*/React.createElement("select", {
      name: "Title",
      id: "Title",
      className: "form-control",
      value: this.state.employee.Title,
      onChange: this.handleChange,
      required: true
    }, /*#__PURE__*/React.createElement("option", {
      value: "",
      disabled: true
    }, "Select Title"), /*#__PURE__*/React.createElement("option", {
      value: "Employee"
    }, "Employee"), /*#__PURE__*/React.createElement("option", {
      value: "Manager"
    }, "Manager"), /*#__PURE__*/React.createElement("option", {
      value: "Director"
    }, "Director"), /*#__PURE__*/React.createElement("option", {
      value: "VP"
    }, "VP"))), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "Department"
    }, "Department:"), /*#__PURE__*/React.createElement("select", {
      id: "Department",
      name: "Department",
      className: "form-control",
      value: this.state.employee.Department,
      onChange: this.handleChange,
      required: true
    }, /*#__PURE__*/React.createElement("option", {
      value: "",
      disabled: true
    }, "Select Department"), /*#__PURE__*/React.createElement("option", {
      value: "IT"
    }, "IT"), /*#__PURE__*/React.createElement("option", {
      value: "Marketing"
    }, "Marketing"), /*#__PURE__*/React.createElement("option", {
      value: "HR"
    }, "HR"), /*#__PURE__*/React.createElement("option", {
      value: "Engineering"
    }, "Engineering"))), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "EmployeeType"
    }, "Employee Type:"), /*#__PURE__*/React.createElement("select", {
      id: "EmployeeType",
      name: "EmployeeType",
      className: "form-control",
      value: this.state.employee.EmployeeType,
      onChange: this.handleChange,
      required: true
    }, /*#__PURE__*/React.createElement("option", {
      value: "",
      disabled: true
    }, "Select Employee Type"), /*#__PURE__*/React.createElement("option", {
      value: "FullTime"
    }, "Full Time"), /*#__PURE__*/React.createElement("option", {
      value: "PartTime"
    }, "Part Time"), /*#__PURE__*/React.createElement("option", {
      value: "Contract"
    }, "Contract"), /*#__PURE__*/React.createElement("option", {
      value: "Seasonal"
    }, "Seasonal"))), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "CurrentStatus"
    }, "Employee Type:"), /*#__PURE__*/React.createElement("select", {
      id: "CurrentStatus",
      name: "CurrentStatus",
      className: "form-control",
      value: this.state.employee.CurrentStatus,
      onChange: this.handleChange,
      required: true
    }, /*#__PURE__*/React.createElement("option", {
      value: "",
      disabled: true
    }, "Select Employee Status"), /*#__PURE__*/React.createElement("option", {
      value: "Active"
    }, "Active"), /*#__PURE__*/React.createElement("option", {
      value: "Inactive"
    }, "Inactive"))), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      className: "btn btn-primary btn-lg btn-block"
    }, this.state.pagetitle)));
  }
}
ReactDOM.render( /*#__PURE__*/React.createElement(EmployeeDirectory, null), document.getElementById('contents'));