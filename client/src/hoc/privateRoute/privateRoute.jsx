import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getLoggedInStatus } from '../../store/auth/auth.selectors';

function PrivateRoute({ children }) {
  const location = useLocation();
  const isLoggedIn = useSelector(getLoggedInStatus());

  return isLoggedIn ? children : <Navigate to="/auth/login" state={{ from: location }} />;
}

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default PrivateRoute;
