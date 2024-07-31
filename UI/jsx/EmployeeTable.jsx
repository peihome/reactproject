import React from 'react';
import Filter from './Filter.jsx';
import withRouter from './withRouter.jsx';
import PropTypes from 'prop-types';

class EmployeeTable extends React.Component {

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
		this.API_SERVER_URL = process.env.API_SERVER_URL;
	}

	async componentDidMount() {
		if (this.props.employees) {
			const employees = [];
			employees.push(this.props.employees);
			this.setState({
				employees: employees,
				filteredEmployees: employees,
				employeeCount: employees.length
			});
		} else {
			await this.fetchEmployees();
			if (this.props.title) {
				this.handleFilterChange('title', this.props.title);
			}

			if (this.props.employeeType) {
				this.handleFilterChange('employeeType', this.props.employeeType);
			}

			if (this.props.department) {
				this.handleFilterChange('department', this.props.department);
			}
		}

		if (this.props.pagetitle) {
			this.setState({
				pagetitle: this.props.pagetitle
			});
		}
	}

	fetchEmployees = async () => {
		try {
			if (this.props.employees == undefined) {
				const query = `query {
                    getAllEmployees {
                        empId
                        FirstName
                        LastName
                        Age
						DateOfBirth
                        DateOfJoining
                        Title
                        Department
                        EmployeeType
                        CurrentStatus
                    }
                }`;

				const response = await fetch(`${this.API_SERVER_URL}`, {
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
					filteredEmployees: employees,
					employeeCount: employees.length
				});
			} else {
				this.setState({
					employees: this.props.employees,
					filteredEmployees: this.props.employees,
					employeeCount: this.props.employees.length
				});
			}
		} catch (error) {
			this.setState({ error: error.message });
		}
	};

	handleFilterChange = (name, value) => {
		this.setState(
			(prevState) => ({
				filters: {
					...prevState.filters,
					[name]: value
				}
			}),
			this.applyFilters
		);
	};

	applyFilters = () => {
		const { employees, filters } = this.state;
		const filteredEmployees = employees.filter((employee) => {
			return (filters.title === '' || employee.Title === filters.title) && (filters.department === '' || employee.Department === filters.department) && (filters.employeeType === '' || employee.EmployeeType === filters.employeeType);
		});
		this.setState({ filteredEmployees: filteredEmployees, employeeCount: filteredEmployees.length });
		this.applyQueryParams(filters);
	};

	applyQueryParams = (filters) => {
		const queryParams = new URLSearchParams();
		if (filters.title) queryParams.set('title', filters.title);
		if (filters.employeeType) queryParams.set('employeeType', filters.employeeType);
		if (filters.department) queryParams.set('department', filters.department);

		this.props.match.navigate(`/employee/filter?${queryParams.toString()}`);
	};

	render() {
		const rows = this.state.filteredEmployees.map((employee) => <EmployeeRow key={employee.empId} employee={employee} isEmployeeDetailFetch={this.props.isEmployeeDetailFetch} />);
		return (
			<>
				{this.props.isEmployeeDetailFetch ? <h1>{'Employee Detail'}</h1> : <h1>{this.state.pagetitle}</h1>}
				{!this.props.isEmployeeDetailFetch && <Filter onFilterChange={this.handleFilterChange} filters={this.state.filters} />}
				<div className="table-container">
					<table className="table table-hover">
						<thead className="thead-dark">
							<tr>
								<th scope="col">EmpId</th>
								<th scope="col">FirstName</th>
								<th scope="col">LastName</th>
								<th scope="col">Age</th>
								<th scope="col">DOB</th>
								<th scope="col">DOJ</th>
								<th scope="col">Title</th>
								<th scope="col">Department</th>
								<th scope="col">EmployeeType</th>
								<th scope="col">CurrentStatus</th>
							</tr>
						</thead>
						<tbody>{rows}</tbody>
					</table>
				</div>
				<p className="rowCount">Total Rows: {this.state.employeeCount}</p>
			</>
		);
	}
}

class EmployeeRow extends React.Component {
	render() {
		return (
			<tr>
				{this.props.isEmployeeDetailFetch ? (
					<td> {this.props.employee.empId} </td>
				) : (
					<td>
						{' '}
						<a target="_blank" rel="noreferrer" href={`#/employee/detail/${this.props.employee.empId}`}>
							{' '}
							{this.props.employee.empId}{' '}
						</a>{' '}
					</td>
				)}
				<td>{this.props.employee.FirstName}</td>
				<td>{this.props.employee.LastName}</td>
				<td>{this.props.employee.Age}</td>
				<td>{this.props.employee.DateOfBirth}</td>
				<td>{this.props.employee.DateOfJoining}</td>
				<td>{this.props.employee.Title}</td>
				<td>{this.props.employee.Department}</td>
				<td>{this.props.employee.EmployeeType}</td>
				<td>{this.props.employee.CurrentStatus ? 'Active' : 'Inactive'}</td>
			</tr>
		);
	}
}

EmployeeRow.propTypes = {
	employee: PropTypes.object,
	isEmployeeDetailFetch: PropTypes.bool
};

EmployeeTable.propTypes = {
	title: PropTypes.string,
	employeeType: PropTypes.string,
	department: PropTypes.string,
	pagetitle: PropTypes.string,
	employees: PropTypes.object,
	match: PropTypes.object,
	isEmployeeDetailFetch: PropTypes.bool
};

export default withRouter(EmployeeTable);
