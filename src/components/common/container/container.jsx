import React from 'react';
import PropTypes from 'prop-types';

function Container({ children }) {
  return <div className="container mx-auto p-1.5">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default Container;
