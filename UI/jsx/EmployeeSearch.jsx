import React from "react";
import { useParams } from "react-router-dom";
import EmployeeUpdate from "./EmployeeUpdate.jsx";

const EmployeeSearch = () => {
    const { id } = useParams();

    return (
        <EmployeeUpdate pagetitle="Search Employee" isEmployeeDetailFetch={true} employeeId={id} />
    );
}

export default EmployeeSearch;