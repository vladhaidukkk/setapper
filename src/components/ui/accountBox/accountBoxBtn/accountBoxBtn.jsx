import React from 'react';
import PropTypes from 'prop-types';

function AccountBoxBtn({ icon: Icon, label, onClick }) {
  return (
    <li>
      <button
        type="button"
        className="flex w-full items-center rounded-md border border-transparent px-2.5 py-1 text-sm font-medium text-stone-700 outline-none
                transition-all duration-200 hover:border-stone-300 hover:bg-stone-200 hover:text-black focus:border-stone-300 focus:bg-stone-200 focus:text-black dark:text-stone-300 dark:hover:border-stone-700
                dark:hover:bg-stone-800 dark:hover:text-white dark:focus:border-stone-700 dark:focus:bg-stone-800 dark:focus:text-white"
        onClick={onClick}
      >
        <Icon className="mr-1.5 h-4 w-4" />
        {label}
      </button>
    </li>
  );
}

AccountBoxBtn.defaultProps = {
  icon: undefined,
};

AccountBoxBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object,
  label: PropTypes.string.isRequired,
};

export default AccountBoxBtn;
