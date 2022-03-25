import React from 'react';
import PropTypes from 'prop-types';
import FilterOption from 'components/common/filter/filterOption/filterOption';

function FilterList({ title, options, value, onChange }) {
  return (
    <div className="space-y-0.5">
      <h4 className="text-sm font-bold text-gray-50">{title}</h4>
      <ul className="pl-1">
        {options.map((option) => (
          <FilterOption
            key={option.value}
            value={option.value}
            label={option.label}
            Icon={option.Icon}
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
