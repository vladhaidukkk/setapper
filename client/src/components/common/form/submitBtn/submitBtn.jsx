import React from 'react';
import PropTypes from 'prop-types';

function SubmitBtn({ children }) {
  return (
    <button
      className="col-span-2 flex w-full justify-center rounded-md border border-indigo-600 bg-indigo-500
              py-1.5 px-4 text-sm font-medium text-white shadow outline-none
              ring-offset-white transition-colors hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2
              dark:border-indigo-500 dark:bg-indigo-600 dark:ring-offset-stone-800 dark:hover:bg-indigo-500 dark:focus:bg-indigo-500 dark:focus:ring-indigo-500 md:text-base"
      type="submit"
    >
      {children}
    </button>
  );
}

SubmitBtn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubmitBtn;
