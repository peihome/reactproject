import React from "react";

export default class Filter extends React.Component {
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
                            <option value="FullTime">Full Time</option>
                            <option value="PartTime">Part Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Seasonal">Seasonal</option>
                        </select>
                    </div>
        );
    }
}