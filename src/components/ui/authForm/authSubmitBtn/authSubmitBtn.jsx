import React from 'react';
import PropTypes from 'prop-types';

function AuthSubmitBtn({ children }) {
  return (
    <div>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2
              px-4 text-sm font-medium text-white shadow outline-none transition-colors
              hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:text-base"
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
