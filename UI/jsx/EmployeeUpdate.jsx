import React from 'react';
import EmployeeCreate from './EmployeeCreate.jsx';
import Alert from './Alert.jsx';
import EmployeeTable from './EmployeeTable.jsx';
import PropTypes from 'prop-types';

export default class EmployeeUpdate extends React.Component {
	constructor() {
		super();
		this.state = {
			employeeId: '',
			pagetitle: 'Update Employee',
			employee: undefined,
			btnValue: 'Fetch Employee'
		};
	}

	async componentDidMount() {
		if (this.props.pagetitle) {
			this.setState({ pagetitle: this.props.pagetitle });
		}

		if (this.props.isEmployeeDetailFetch) {
			this.setState({ isEmployeeDetailFetch: this.props.isEmployeeDetailFetch });

			if (this.props.employeeId) {
				this.setState({
					employeeId: this.props.employeeId
				});

				this.setState({
					employee: await this.fetchEmployeeById(this.props.employeeId)
				});
			}
		}
	}

	fetchEmployeeById = async (employeeId) => {
		let employee = undefined;

		try {
			employeeId = parseInt(employeeId);
		} catch (e) {
			employeeId = 0;
			console.log(e);
		}

		try {
			const query = `query($id: Int!) {
                            getEmployeeById(empId: $id) {
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
			const variables = {
				id: employeeId
			};

			const response = await fetch('http://localhost:8000/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					query: query,
					variables: variables
				})
			});
			if (!response.ok) {
				throw new Error('Failed to fetch employees');
			}
			employee = (await response.json()).data.getEmployeeById;
            
			this.setState({
				showAlert: true,
				alertMessage: employee == undefined ? 'Employee details not found!' : 'Employee details fetched successfully!',
				result: employee == undefined ? false : true
			});

			this.resetAlert();
		} catch (e) {
			employee = undefined;
			console.log(e);
			this.setState({
				showAlert: true,
				alertMessage: 'Employee details not found!',
				result: false
			});

			this.resetAlert();
		}

		return employee;
	};

	handleChange = (e) => {
		let value = e.target.value;

		this.setState({ employeeId: value });
	};

	handleSubmit = async (e) => {
		e.preventDefault();

		this.setState({
			employee: await this.fetchEmployeeById(this.state.employeeId)
		});
	};

	updateEmployee = async (employee) => {
		let updateResponse = undefined;

		try {
			let fieldsToUpdate = [];

			if (employee.FirstName) fieldsToUpdate.push(`FirstName: "${employee.FirstName}"`);
			if (employee.LastName) fieldsToUpdate.push(`LastName: "${employee.LastName}"`);
			if (employee.Age) fieldsToUpdate.push(`Age: ${employee.Age}`);
			if (employee.DateOfJoining) fieldsToUpdate.push(`DateOfJoining: "${employee.DateOfJoining}"`);
			if (employee.Title) fieldsToUpdate.push(`Title: "${employee.Title}"`);
			if (employee.Department) fieldsToUpdate.push(`Department: "${employee.Department}"`);
			if (employee.EmployeeType) fieldsToUpdate.push(`EmployeeType: "${employee.EmployeeType}"`);
			if (employee.CurrentStatus !== undefined) fieldsToUpdate.push(`CurrentStatus: ${employee.CurrentStatus}`);

			const fieldsString = fieldsToUpdate.join(', ');

			const mutation = `
                mutation {
                    updateEmployee(
                        empId: ${parseInt(this.state.employeeId)},
                        ${fieldsString}
                    ) {
                        FirstName
                        LastName
                        Age
                        DateOfJoining
                        Title
                        Department
                        EmployeeType
                        CurrentStatus
                    }
                }
            `;

			const response = await fetch('http://localhost:8000/graphql', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ query: mutation })
			});

			if (!response.ok) {
				throw new Error('Failed to update employee');
			}

			updateResponse = (await response.json()).data.updateEmployee;

			this.setState({
				showAlert: true,
				alertMessage: 'Employee Record updated successfully!',
				result: true
			});

			this.resetAlert();
		} catch (error) {
			console.log(error);
			updateResponse = undefined;
			this.setState({
				showAlert: true,
				alertMessage: 'Error updating employee record!',
				result: false
			});

			this.resetAlert();
		}

		return updateResponse;
	};

	resetAlert = () => {
		clearTimeout(this.timeout);
		this.timeout = setTimeout(() => {
			this.setState({ showAlert: false });
			clearTimeout(this.timeout);
		}, 4000);
	};

	render() {
		return (
			<>
				{this.state.showAlert && <Alert message={this.state.alertMessage} result={this.state.result} />}

				{this.state.employee != undefined ? (
					this.state.isEmployeeDetailFetch ? (
						<EmployeeTable employees={this.state.employee} pagetitle="Search Results" isEmployeeDetailFetch={this.props.isEmployeeDetailFetch} />
					) : (
						<EmployeeCreate employee={this.state.employee} pagetitle={this.state.pagetitle} updateEmployee={this.updateEmployee} deleteEmployee={this.props.deleteEmployee} employeeId={this.state.employeeId} handleDeleteClick={this.props.handleDeleteClick} />
					)
				) : (
					!(this.state.employeeId && this.state.employee) && (
						<>
							<h1>{this.state.pagetitle}</h1>
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label htmlFor="id" className="required">
										Employee Id:
									</label>
									<input type="string" id="id" name="id" className="form-control" onBlur={this.handleChange} required />
								</div>
								<input type="submit" className="btn btn-primary btn-lg btn-block" value={this.state.btnValue} />
							</form>
						</>
					)
				)}
			</>
		);
	}
}

EmployeeUpdate.propTypes = {
	pagetitle: PropTypes.string,
	isEmployeeDetailFetch: PropTypes.bool,
	employeeId: PropTypes.string,
	deleteEmployee: PropTypes.func,
	handleDeleteClick: PropTypes.func
};
