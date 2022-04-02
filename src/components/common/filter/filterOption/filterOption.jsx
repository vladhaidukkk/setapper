import React from 'react';
import PropTypes from 'prop-types';

function FilterOption({ value, label, icon: Icon, isSelected, onClick }) {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <li>
      <button
        type="button"
        className={`flex w-full items-center rounded-md border px-2.5 py-1 text-sm font-medium outline-none transition-all
              duration-200 hover:border-stone-300 hover:bg-stone-100 hover:text-black focus:border-stone-300
              focus:bg-stone-100 focus:text-black dark:hover:border-stone-700 dark:hover:bg-stone-900
              dark:hover:text-white dark:focus:border-stone-700 dark:focus:bg-stone-900 dark:focus:text-white ${
                isSelected
                  ? 'border-stone-300 bg-stone-100 text-black dark:border-stone-700 dark:bg-stone-900 dark:text-white'
                  : 'border-transparent text-stone-700 dark:text-stone-300'
              }`}
        onClick={handleClick}
      >
        {Icon && <Icon className="mr-1.5 h-4 w-4" />}
        {label}
      </button>
    </li>
  );
}

FilterOption.defaultProps = {
  icon: undefined,
};

FilterOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.object,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FilterOption;
