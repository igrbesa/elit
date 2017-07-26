import React, { PropTypes } from 'react';
import { Route, Link } from 'react-router-dom';

const NavLink = ({ to, label }) => (
  <Route
    to={to}
    exact
    children={({ location: { pathname } }) => (
      <Link to={to}>
        {label}
      </Link>
    )}
  />
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default NavLink;
