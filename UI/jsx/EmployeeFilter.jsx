import React from 'react';
import EmployeeTable from './EmployeeTable.jsx';
import withRouter from './withRouter.jsx';
import PropTypes from 'prop-types';

class EmployeeFilter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			employeeType: '',
			department: ''
		};
	}

	componentDidMount() {
		const queryParams = new URLSearchParams(this.props.match.location.search);
		let title = queryParams.get('title') || '';
		let employeeType = queryParams.get('employeeType') || '';
		let department = queryParams.get('department') || '';

		if (employeeType) {
			switch (employeeType) {
				case 'PartTime':
					employeeType = 'PartTime';
					break;
				case 'Contract':
					employeeType = 'Contract';
					break;
				case 'Seasonal':
					employeeType = 'Seasonal';
					break;
				case 'FullTime':
					employeeType = 'FullTime';
					break;
			}
		}

		if (title) {
			switch (title) {
				case 'Employee':
					title = 'Employee';
					break;
				case 'Manager':
					title = 'Manager';
					break;
				case 'Director':
					title = 'Director';
					break;
				case 'VP':
					title = 'VP';
					break;
			}
		}

		if (department) {
			switch (title) {
				case 'IT':
					department = 'IT';
					break;
				case 'Marketing':
					department = 'Marketing';
					break;
				case 'HR':
					department = 'HR';
					break;
				case 'Engineering':
					department = 'Engineering';
					break;
			}
		}

		this.setState({ title, employeeType, department });
	}

	render() {
		const { title, employeeType, department } = this.state;

		return <EmployeeTable title={title} employeeType={employeeType} department={department} match={this.props.match} />;
	}
}

EmployeeFilter.propTypes = {
	match: PropTypes.object
};

export default withRouter(EmployeeFilter);
