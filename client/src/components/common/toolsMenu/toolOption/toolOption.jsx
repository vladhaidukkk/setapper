import React from 'react';
import PropTypes from 'prop-types';

function ToolOption({ icon: Icon, label, value, onClick }) {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <li className="relative">
      <button
        type="button"
        onClick={handleClick}
        className="flex w-full items-center rounded-md border border-transparent px-2.5 py-1.5 font-medium text-stone-700
              outline-none transition-all duration-200 hover:border-stone-300 hover:bg-stone-100
              hover:text-black focus:border-stone-300 focus:bg-stone-100 focus:text-black
              dark:text-stone-300 dark:hover:border-stone-700 dark:hover:bg-stone-900 dark:hover:text-white dark:focus:border-stone-700 dark:focus:bg-stone-900 dark:focus:text-white"
      >
        {Icon && <Icon className="mr-3 h-5 w-5 flex-shrink-0" />}
        <span className="block truncate">{label}</span>
      </button>
    </li>
  );
}

ToolOption.defaultProps = {
  icon: undefined,
};

ToolOption.propTypes = {
  icon: PropTypes.object,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToolOption;
