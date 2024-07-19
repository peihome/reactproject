import React from 'react';
import { NavLink } from 'react-router-dom';

const ReloadingNavLink = ({ to, children, ...props }) => {
  const handleClick = (event) => {
    event.preventDefault();
    window.location.href = '/#' + to;
    window.location.reload(true);
  };

  return (
    <NavLink
      to={to}
      onClick={handleClick}
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default ReloadingNavLink;