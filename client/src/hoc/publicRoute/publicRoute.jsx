import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getLoggedInStatus } from '../../store/auth/auth.selectors';

function PublicRoute({ children }) {
  const isLoggedIn = useSelector(getLoggedInStatus());

  return !isLoggedIn ? children : <Navigate to="/builder/inspector" />;
}

PublicRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default PublicRoute;
