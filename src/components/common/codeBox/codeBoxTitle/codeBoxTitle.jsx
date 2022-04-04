import React from 'react';
import PropTypes from 'prop-types';

function CodeBoxTitle({ title }) {
  return (
    <div className="border-b border-stone-300 bg-stone-50 p-1.5 dark:border-stone-700 dark:bg-stone-900">
      <h5 className="w-max rounded-md border border-stone-300 bg-white px-2 py-1 text-xs text-stone-900 shadow-sm dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100">
        {title}
      </h5>
    </div>
  );
}

CodeBoxTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CodeBoxTitle;
