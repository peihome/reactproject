import React from "react";

export default class Filter extends React.Component {
    handleFilterChange = (e) => {
        const { name, value } = e.target;
        this.props.onFilterChange(name, value);
    }

    render() {
        return (
            <div className="filters">
                <select name="title" onChange={this.handleFilterChange}>
                    <option value="">All Titles</option>
                    <option value="Employee">Employee</option>
                    <option value="Manager">Manager</option>
                    <option value="Director">Director</option>
                    <option value="VP">VP</option>
                </select>
                <select name="department" onChange={this.handleFilterChange}>
                    <option value="">All Departments</option>
                    <option value="IT">IT</option>
                    <option value="Marketing">Marketing</option>
                    <option value="HR">HR</option>
                    <option value="Engineering">Engineering</option>
                </select>
                <select name="employeeType" onChange={this.handleFilterChange}>
                    <option value="">All Employee Types</option>
                    <option value="FullTime" {...this.props.employeeType == "FullTime" && "selected"}>Full Time</option>
                    <option value="PartTime" {...this.props.employeeType == "PartTime" && "selected"}>Part Time</option>
                    <option value="Contract" {...this.props.employeeType == "Contract" && "selected"}>Contract</option>
                    <option value="Seasonal" {...this.props.employeeType == "Seasonal" && "selected"}>Seasonal</option>
                </select>
            </div>
        );
    }
}