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
		await this.deleteEmployee(this.state.employeeToDelete);
		this.setState({
			showEmployeeDeletePage: true,
			showConfirmDeleteModal: false,
			employeeToDelete: null
		});
	};

	handleCancelDelete = () => {
		this.setState({
			showConfirmDeleteModal: false,
			employeeToDelete: null
		});
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

			const response = await fetch(`${this.API_SERVER_URL}`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ query: mutation })
			});

			if (!response.ok) {
				throw new Error('Failed to update employee');
			}

			deleteResponse = (await response.json()).data.deleteEmployee;

			this.setState({
				showAlert: true,
				alertMessage: deleteResponse.message,
				result: true
			});

			clearTimeout(this.timeout);
			this.timeout = setTimeout(() => {
				this.setState({ showAlert: false });
				clearTimeout(this.timeout);
			}, 4000);
		} catch (error) {
			console.log(error);
			deleteResponse = undefined;
			this.setState({
				showAlert: true,
				alertMessage: 'Failed to delete employee record!',
				result: false
			});

			clearTimeout(this.timeout);
			this.timeout = setTimeout(() => {
				this.setState({ showAlert: false });
				clearTimeout(this.timeout);
			}, 4000);
		}

		return deleteResponse;
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
