import React from 'react';
import PropTypes from 'prop-types';

function Container({ fluid, children }) {
  return <div className={`mx-auto w-full px-2.5 py-1.5 ${fluid ? 'w-full' : 'container'}`}>{children}</div>;
}

Container.defaultProps = {
  fluid: false,
};

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default Container;
