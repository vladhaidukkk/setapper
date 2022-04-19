import React from 'react';
import PropTypes from 'prop-types';

function ColumnCaption({ hint, children }) {
  return (
    <h3 className="flex items-center justify-between border-b border-stone-200 p-2.5 dark:border-stone-700">
      <span className="text-sm font-medium text-black dark:text-white">{children}</span>
      {hint && <span className="text-xs text-stone-700 dark:text-stone-200">{hint}</span>}
    </h3>
  );
}

ColumnCaption.defaultProps = {
  hint: undefined,
};

ColumnCaption.propTypes = {
  hint: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default ColumnCaption;
