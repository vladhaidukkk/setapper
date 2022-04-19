import React from 'react';
import PropTypes from 'prop-types';

function TableColumn({ children }) {
  return (
    <div className="rounded-md border border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-900">
      {children}
    </div>
  );
}

TableColumn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default TableColumn;
