import React from 'react';
import PropTypes from 'prop-types';

function ErrorField({ error }) {
  return (
    <div
      className="mt-1 rounded-md border border-rose-200 bg-rose-50 px-2 py-1 text-center text-xs font-medium
          text-rose-500 shadow-sm dark:border-rose-300 dark:bg-rose-100 dark:text-rose-500"
    >
      {error}
    </div>
  );
}

ErrorField.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorField;
