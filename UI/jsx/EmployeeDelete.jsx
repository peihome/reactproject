import React from 'react';
import EmployeeUpdate from './EmployeeUpdate.jsx';
import ConfirmDeleteModal from './ConfirmDeleteModal.jsx';
import Alert from './Alert.jsx';

export default class EmployeeDelete extends React.Component {
	constructor() {
		super();

		this.state = {
			showAlert: false,
			showConfirmDeleteModal: false,
			showEmployeeDeletePage: false
		};
		this.API_SERVER_URL = process.env.API_SERVER_URL;
	}

	handleDeleteClick = (employeeId) => {
		this.setState({
			showConfirmDeleteModal: true,
			employeeToDelete: employeeId
		});
	};

	handleConfirmDelete = async () => {
		const response = await this.deleteEmployee(this.state.employeeToDelete);
		if(typeof response === 'boolean' && response == false){
			this.setState({
				showConfirmDeleteModal: false
			});
		}else {
			this.setState({
				showEmployeeDeletePage: true,
				showConfirmDeleteModal: false,
				employeeToDelete: null
			});
		}
	};

	handleCancelDelete = () => {
		this.setState({
			showConfirmDeleteModal: false,
			employeeToDelete: null
		});
	};

	fetchEmployeeById = async (employeeId) => {
		let employee = undefined;

		try {
			const query = `query($id: Int!) {
                            getEmployeeById(empId: $id) {
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
			const variables = {
				id: employeeId
			};

			const response = await fetch(`${this.API_SERVER_URL}`, {
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

		} catch (e) {
			employee = undefined;
			console.log(e);
		}

		return employee;
	};

	deleteEmployee = async (empId) => {
		let deleteResponse;
		try {
			empId = parseInt(empId);
		} catch (e) {
			empId = 0;
			console.log(e);
		}

		try {
			const mutation = `
                    mutation {
                        deleteEmployee(empId: ${empId}) {
                            code
                            message
                        }
                    }
                `;
			
			//Fetch employee details
			const employee = await this.fetchEmployeeById(empId);

			if(employee.CurrentStatus) {
				this.setState({
					showAlert: true,
					alertMessage: "CAN’T DELETE EMPLOYEE – STATUS ACTIVE",
					result: false
				});
	
				this.resetAlert();
				return false;
			}

			const response = await fetch(`${this.API_SERVER_URL}`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ query: mutation })
			});

			if (!response.ok) {
				throw new Error('Failed to delete employee');
			}

			deleteResponse = (await response.json()).data.deleteEmployee;

			this.setState({
				showAlert: true,
				alertMessage: deleteResponse.message,
				result: true
			});

			this.resetAlert();
		} catch (error) {
			console.log(error);
			deleteResponse = undefined;
			this.setState({
				showAlert: true,
				alertMessage: 'Failed to delete employee record!',
				result: false
			});

			this.resetAlert();
		}

		return deleteResponse;
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

				<ConfirmDeleteModal show={this.state.showConfirmDeleteModal} onHide={this.handleCancelDelete} onConfirm={this.handleConfirmDelete} />

				{this.state.showEmployeeDeletePage ? <EmployeeDelete /> : <EmployeeUpdate pagetitle="Delete Employee" deleteEmployee={this.deleteEmployee} handleDeleteClick={this.handleDeleteClick} />}
			</>
		);
	}
}
