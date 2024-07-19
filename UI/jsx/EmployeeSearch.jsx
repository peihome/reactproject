import React from 'react';
import withRouter from './withRouter.jsx';
import EmployeeUpdate from './EmployeeUpdate.jsx';
import PropTypes from 'prop-types';

class EmployeeSearch extends React.Component {
	constructor() {
		super();
	}

	render() {
		const { match } = this.props;
		const { id } = match.params;

		return <EmployeeUpdate pagetitle="Search Employee" isEmployeeDetailFetch={true} employeeId={id} />;
	}
}

EmployeeSearch.propTypes = {
	match: PropTypes.object
};

export default withRouter(EmployeeSearch);
