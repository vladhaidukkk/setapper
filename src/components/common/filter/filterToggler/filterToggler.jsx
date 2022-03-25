import React from 'react';
import PropTypes from 'prop-types';
import { FilterIcon } from '@heroicons/react/solid';

function FilterToggler({ onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex h-full w-full items-center justify-center text-gray-400 outline-none
      hover:text-gray-600 group-focus-within:text-gray-600 dark:text-neutral-400
      dark:hover:text-neutral-100 dark:group-focus-within:text-neutral-100"
    >
      <FilterIcon className="h-5 w-5" />
    </button>
  );
}

FilterToggler.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default FilterToggler;
