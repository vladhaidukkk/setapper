import React from 'react';
import PropTypes from 'prop-types';
import { FilterIcon } from '@heroicons/react/solid';

function FilterToggler({ onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex h-full w-full items-center justify-center rounded text-stone-700
      outline-none duration-200 hover:text-black
      group-focus-within:text-black dark:text-stone-300
      dark:hover:text-white dark:group-focus-within:text-white"
    >
      <FilterIcon className="h-4.5 w-4.5" />
    </button>
  );
}

FilterToggler.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default FilterToggler;
