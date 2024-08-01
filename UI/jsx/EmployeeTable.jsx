import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter.jsx';
import withRouter from './withRouter.jsx';

class EmployeeTable extends React.Component {
	constructor() {
		super();
		this.state = {
			employees: [],
			filteredEmployees: [],
			upcomingRetirementEmployees: [],
			activeTab: 'all', // 'all' or 'upcomingRetirement'
			filters: {
				all: {
					title: '',
					department: '',
					employeeType: '',
					ageRange: ''
				},
				upcomingRetirement: {
					title: '',
					department: '',
					employeeType: ''
				}
			},
			showUpcomingRetirement: false
		};
		this.API_SERVER_URL = process.env.API_SERVER_URL;
	}

	async componentDidMount() {
		if (this.props.employees) {
			const employees = this.props.employees; // Assume props directly passed
			this.setState({
				employees: employees,
				filteredEmployees: employees,
				employeeCount: employees.length
			});
			this.updateUpcomingRetirement(employees);
		} else {
			await this.fetchEmployees();
		}
	}

	fetchEmployees = async () => {
		try {
			if (!this.props.employees) {
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
				this.updateUpcomingRetirement(employees);
			} else {
				this.setState({
					employees: this.props.employees,
					filteredEmployees: this.props.employees,
					employeeCount: this.props.employees.length
				});
				this.updateUpcomingRetirement(this.props.employees);
			}
		} catch (error) {
			this.setState({ error: error.message });
		}
	};

	updateUpcomingRetirement = (employees) => {
		const now = new Date();
		const sixMonthsFromNow = new Date();
		sixMonthsFromNow.setMonth(now.getMonth() + 6);

		const upcomingRetirement = employees.filter(employee => {
			const dob = new Date(employee.DateOfBirth);
			const retirementDate = new Date(dob.setFullYear(dob.getFullYear() + 65));

			return retirementDate >= now && retirementDate <= sixMonthsFromNow;
		});

		this.setState({ upcomingRetirementEmployees: upcomingRetirement });
	};

	handleFilterChange = (name, value) => {
		this.setState(
			(prevState) => ({
				filters: {
					...prevState.filters,
					[prevState.activeTab]: {
						...prevState.filters[prevState.activeTab],
						[name]: value
					}
				}
			}),
			this.applyFilters
		);
	};

	applyFilters = () => {
		const { employees, filters, activeTab, upcomingRetirementEmployees } = this.state;

		if (activeTab === 'upcomingRetirement') {
			const filteredUpcomingRetirement = upcomingRetirementEmployees.filter(employee => {
				return (
					(filters.upcomingRetirement.title === '' || employee.Title === filters.upcomingRetirement.title) &&
					(filters.upcomingRetirement.department === '' || employee.Department === filters.upcomingRetirement.department) &&
					(filters.upcomingRetirement.employeeType === '' || employee.EmployeeType === filters.upcomingRetirement.employeeType)
				);
			});
			this.setState({ filteredEmployees: filteredUpcomingRetirement, employeeCount: filteredUpcomingRetirement.length });
		} else {
			const filteredEmployees = employees.filter(employee => {
				const dob = new Date(employee.DateOfBirth);
				const age = new Date().getFullYear() - dob.getFullYear();
				const ageRange = filters.all.ageRange;
				const [minAge, maxAge] = ageRange ? ageRange.split('-').map(Number) : [0, Infinity];

				return (
					(filters.all.title === '' || employee.Title === filters.all.title) &&
					(filters.all.department === '' || employee.Department === filters.all.department) &&
					(filters.all.employeeType === '' || employee.EmployeeType === filters.all.employeeType) &&
					(age >= minAge && age <= maxAge)
				);
			});
			this.setState({ filteredEmployees: filteredEmployees, employeeCount: filteredEmployees.length });
		}

		this.applyQueryParams();
	};

	applyQueryParams = () => {
		const { filters, activeTab } = this.state;
		const queryParams = new URLSearchParams();

		if (activeTab === 'all') {
			if (filters.all.title) queryParams.set('title', filters.all.title);
			if (filters.all.employeeType) queryParams.set('employeeType', filters.all.employeeType);
			if (filters.all.department) queryParams.set('department', filters.all.department);
			if (filters.all.ageRange) queryParams.set('ageRange', filters.all.ageRange);
		} else {
			if (filters.upcomingRetirement.title) queryParams.set('title', filters.upcomingRetirement.title);
			if (filters.upcomingRetirement.department) queryParams.set('department', filters.upcomingRetirement.department);
			if (filters.upcomingRetirement.employeeType) queryParams.set('employeeType', filters.upcomingRetirement.employeeType);
		}

		this.props.match.navigate(`/employee/filter?${queryParams.toString()}`);
	};

	toggleTab = (tab) => {
		this.setState(
			() => ({ activeTab: tab, showUpcomingRetirement: tab === 'upcomingRetirement' }),
			this.applyFilters
		);
	};

	render() {
		const rows = this.state.filteredEmployees.map((employee) => <EmployeeRow key={employee.empId} employee={employee} isEmployeeDetailFetch={this.props.isEmployeeDetailFetch} />);
		return (
			<>
				{this.props.isEmployeeDetailFetch ? <h1>{'Employee Detail'}</h1> : <h1>{this.state.pagetitle}</h1>}
				{!this.props.isEmployeeDetailFetch && (
					<>
						<div className="tabs">
							<button
								className={`tab-button ${this.state.activeTab === 'all' ? 'active' : ''}`}
								onClick={() => this.toggleTab('all')}
							>
								All Employees
							</button>
							<button
								className={`tab-button ${this.state.activeTab === 'upcomingRetirement' ? 'active' : ''}`}
								onClick={() => this.toggleTab('upcomingRetirement')}
							>
								Upcoming Retirements
							</button>
						</div>
						<Filter 
							onFilterChange={this.handleFilterChange} 
							filters={this.state.filters[this.state.activeTab]} 
							activeTab={this.state.activeTab}
						/>
					</>
				)}
				<div className="table-container">
					<table className="table table-hover">
						<thead className="thead-dark">
							<tr>
								<th scope="col">EmpId</th>
								<th scope="col">FirstName</th>
								<th scope="col">LastName</th>
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

const EmployeeRow = ({ employee, isEmployeeDetailFetch }) => (
	<tr>
		{isEmployeeDetailFetch ? (
			<td>{employee.empId}</td>
		) : (
			<td>
				<a target="_blank" rel="noreferrer" href={`#/employee/detail/${employee.empId}`}>
					{employee.empId}
				</a>
			</td>
		)}
		<td>{employee.FirstName}</td>
		<td>{employee.LastName}</td>
		<td>{employee.DateOfBirth}</td>
		<td>{employee.DateOfJoining}</td>
		<td>{employee.Title}</td>
		<td>{employee.Department}</td>
		<td>{employee.EmployeeType}</td>
		<td>{employee.CurrentStatus ? 'Active' : 'Inactive'}</td>
	</tr>
);

EmployeeRow.propTypes = {
	employee: PropTypes.object.isRequired,
	isEmployeeDetailFetch: PropTypes.bool.isRequired
};

EmployeeTable.propTypes = {
	title: PropTypes.string,
	employeeType: PropTypes.string,
	department: PropTypes.string,
	pagetitle: PropTypes.string,
	employees: PropTypes.array,
	match: PropTypes.object.isRequired,
	isEmployeeDetailFetch: PropTypes.bool
};

export default withRouter(EmployeeTable);
