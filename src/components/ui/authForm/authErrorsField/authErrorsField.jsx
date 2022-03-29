import React from 'react';
import PropTypes from 'prop-types';

function AuthErrorsField({ error }) {
  return (
    <div
      className="flex w-full items-center justify-center rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm
      font-medium text-red-400 shadow dark:border-red-300 dark:bg-red-100 dark:text-red-500 md:text-base"
    >
      {error}
    </div>
  );
}

AuthErrorsField.propTypes = {
  error: PropTypes.string.isRequired,
};

export default AuthErrorsField;
