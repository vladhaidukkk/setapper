import React from 'react';
import PropTypes from 'prop-types';
import FilterOption from 'components/common/filter/filterOption/filterOption';

function FilterList({ title, options, value, onChange }) {
  return (
    <div className="space-y-1">
      <h4 className="text-sm font-medium text-stone-700 dark:text-stone-300">{title}</h4>
      <ul className="flex flex-col space-y-0.5">
        {options.map((option) => (
          <FilterOption
            key={option.value}
            value={option.value}
            label={option.label}
            icon={option.icon}
            onClick={onChange}
            isSelected={option.value === value}
          />
        ))}
      </ul>
    </div>
  );
}

FilterList.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterList;
