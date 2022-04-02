import React from 'react';
import PropTypes from 'prop-types';

function ThemeOption({ isSelected, onClick, label, icon: Icon, value }) {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <li>
      <button
        type="button"
        className={`flex w-full items-center rounded-md border px-2.5 py-1 text-sm font-medium outline-none transition-all
              transition-all duration-200 hover:border-stone-300 hover:bg-stone-200 hover:text-black focus:border-stone-300
              focus:bg-stone-200 focus:text-black dark:hover:border-stone-700 dark:hover:bg-stone-800
              dark:hover:text-white dark:focus:border-stone-700 dark:focus:bg-stone-800 dark:focus:text-white ${
                isSelected
                  ? 'border-stone-300 bg-stone-200 text-black dark:border-stone-700 dark:bg-stone-800 dark:text-white'
                  : 'border-transparent text-stone-700 dark:text-stone-300'
              }`}
        onClick={handleClick}
      >
        <Icon className="mr-1.5 h-4 w-4" />
        {label}
      </button>
    </li>
  );
}

ThemeOption.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
};

export default ThemeOption;
