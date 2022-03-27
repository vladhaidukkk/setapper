import React from 'react';
import PropTypes from 'prop-types';

function FilterOption({ value, label, Icon, isSelected, onClick }) {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <li>
      <button
        type="button"
        className={`flex items-center text-gray-50 outline-none transition-all
        hover:translate-x-0.5 hover:translate-x-0.5 hover:text-gray-50 hover:text-opacity-100
        focus:translate-x-px focus:text-gray-50
        focus:text-opacity-100 ${isSelected ? 'text-gray-50' : 'text-gray-200 text-opacity-80'}`}
        onClick={handleClick}
      >
        {Icon && <Icon className="mr-1 h-3.5 w-3.5 flex-none" />}
        {label}
      </button>
    </li>
  );
}

FilterOption.defaultProps = {
  Icon: undefined,
};

FilterOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  Icon: PropTypes.object,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FilterOption;
