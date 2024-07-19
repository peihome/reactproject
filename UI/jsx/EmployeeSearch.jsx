import React from "react";
import withRouter from "./withRouter.jsx";
import EmployeeUpdate from "./EmployeeUpdate.jsx";

class EmployeeSearch extends React.Component {

    constructor() {
        super();
    }

    render() {

        const { match } = this.props;
        const { id } = match.params;

        return (
            <EmployeeUpdate pagetitle="Search Employee" isEmployeeDetailFetch={true} employeeId={id} />
        );
    }
}

export default withRouter(EmployeeSearch);