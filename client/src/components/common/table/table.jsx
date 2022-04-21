import React from 'react';
import PropTypes from 'prop-types';

function Table({ children }) {
  return <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-4">{children}</div>;
}

Table.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default Table;
