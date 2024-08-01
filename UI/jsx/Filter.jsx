import React from 'react';
import PropTypes from 'prop-types';

export default class Filter extends React.Component {
	handleFilterChange = (e) => {
		const { name, value } = e.target;
		this.props.onFilterChange(name, value);
	};

	render() {
		const { filters, activeTab } = this.props;

		return (
			<div className="filters">
				<select name="title" value={filters.title} onChange={this.handleFilterChange}>
					<option value="">All Titles</option>
					<option value="Employee">Employee</option>
					<option value="Manager">Manager</option>
					<option value="Director">Director</option>
					<option value="VP">VP</option>
				</select>

				<select name="department" value={filters.department} onChange={this.handleFilterChange}>
					<option value="">All Departments</option>
					<option value="IT">IT</option>
					<option value="Marketing">Marketing</option>
					<option value="HR">HR</option>
					<option value="Engineering">Engineering</option>
				</select>

				<select name="employeeType" value={filters.employeeType} onChange={this.handleFilterChange}>
					<option value="">All Employee Types</option>
					<option value="FullTime">Full Time</option>
					<option value="PartTime">Part Time</option>
					<option value="Contract">Contract</option>
					<option value="Seasonal">Seasonal</option>
				</select>

				{/* Conditionally render age range filter */}
				{activeTab === 'all' && (
					<select name="ageRange" value={filters.ageRange} onChange={this.handleFilterChange}>
						<option value="">All Ages</option>
						<option value="20-25">20-25</option>
						<option value="25-30">25-30</option>
						<option value="30-35">30-35</option>
						<option value="35-40">35-40</option>
						<option value="40-45">40-45</option>
						<option value="45-50">45-50</option>
						<option value="50-55">50-55</option>
						<option value="55-60">55-60</option>
						<option value="60-65">60-65</option>
					</select>
				)}
			</div>
		);
	}
}

Filter.propTypes = {
	filters: PropTypes.object,
	onFilterChange: PropTypes.func,
	activeTab: PropTypes.string
};
