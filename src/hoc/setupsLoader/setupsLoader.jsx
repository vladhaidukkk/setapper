import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getSetupsLoadingStatus } from 'store/setups/setups.selectors';

function SetupsLoader({ children }) {
  const isSetupsLoading = useSelector(getSetupsLoadingStatus());

  return !isSetupsLoading ? children : <h1>loading setups...</h1>;
}

SetupsLoader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default SetupsLoader;
