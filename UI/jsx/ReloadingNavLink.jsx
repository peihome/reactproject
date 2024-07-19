import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const ReloadingNavLink = ({ to, children, ...props }) => {
	const handleClick = (event) => {
		event.preventDefault();
		window.location.href = '/#' + to;
		window.location.reload(true);
	};

	return (
		<NavLink to={to} onClick={handleClick} {...props}>
			{children}
		</NavLink>
	);
};

ReloadingNavLink.propTypes = {
	to: PropTypes.string,
	children: PropTypes.array
};

export default ReloadingNavLink;
