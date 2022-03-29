import React from 'react';
import PropTypes from 'prop-types';

function AuthSubmitBtn({ children }) {
  return (
    <div>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2
              px-4 text-sm font-medium text-white shadow outline-none ring-offset-white transition-colors
              hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:ring-offset-stone-800
              dark:hover:bg-indigo-600 dark:focus:bg-indigo-600 dark:focus:ring-indigo-600 md:text-base"
      >
        {children || 'Submit'}
      </button>
    </div>
  );
}

AuthSubmitBtn.defaultProps = {
  children: undefined,
};

AuthSubmitBtn.propTypes = {
  children: PropTypes.node,
};

export default AuthSubmitBtn;
