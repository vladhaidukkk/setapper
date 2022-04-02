import React from 'react';
import PropTypes from 'prop-types';

function AuthErrorsField({ error }) {
  return (
    <div
      className="flex w-full items-center justify-center rounded-md border border-rose-200 bg-rose-50 px-3 py-2
      text-sm font-medium text-rose-500 shadow dark:border-rose-300 dark:bg-rose-50 dark:text-rose-500 md:text-base"
    >
      {error}
    </div>
  );
}

AuthErrorsField.propTypes = {
  error: PropTypes.string.isRequired,
};

export default AuthErrorsField;
