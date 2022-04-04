import React from 'react';
import PropTypes from 'prop-types';

function CodeBoxOption({ isSelected, text, onClick }) {
  const handleClick = () => {
    onClick(text);
  };

  return (
    <button
      className={`w-max rounded-md border border-stone-300 px-2 py-1 text-xs shadow-sm outline-none transition-colors duration-200 hover:bg-white hover:text-stone-900 focus:bg-white focus:text-stone-900 dark:border-stone-700 dark:hover:bg-stone-800 dark:hover:text-stone-100 dark:focus:bg-stone-800 dark:focus:text-stone-100 ${
        isSelected
          ? 'bg-white text-stone-900 dark:bg-stone-800 dark:text-stone-100'
          : 'bg-stone-100 text-stone-700 dark:bg-stone-900 dark:text-stone-300'
      }`}
      type="button"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

CodeBoxOption.defaultProps = {
  isSelected: false,
};

CodeBoxOption.propTypes = {
  isSelected: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CodeBoxOption;
