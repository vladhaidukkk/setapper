import React from 'react';
import PropTypes from 'prop-types';
import { FilterIcon } from '@heroicons/react/solid';

function FilterToggler({ onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex h-full w-full items-center justify-center rounded text-stone-600
      outline-none duration-200 hover:text-stone-800
      group-focus-within:text-stone-800 dark:text-stone-400
      dark:hover:text-stone-100 dark:group-focus-within:text-stone-100"
    >
      <FilterIcon className="h-4.5 w-4.5" />
    </button>
  );
}

FilterToggler.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default FilterToggler;
