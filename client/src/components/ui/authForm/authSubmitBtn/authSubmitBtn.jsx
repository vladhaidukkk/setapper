import React from 'react';
import PropTypes from 'prop-types';

function AuthSubmitBtn({ children }) {
  return (
    <div>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md border border-indigo-600 bg-indigo-500
              py-2 px-4 text-sm font-medium text-white shadow outline-none ring-offset-white transition-colors
              duration-200 duration-200 hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2
              dark:border-indigo-500 dark:bg-indigo-600 dark:ring-offset-stone-800 dark:hover:bg-indigo-500 dark:focus:bg-indigo-500 dark:focus:ring-indigo-500 md:text-base"
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
