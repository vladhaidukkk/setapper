import React from 'react';
import { SelectorIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';

function SelectedTool({ onToggle, label, icon: Icon }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex h-full w-full items-center justify-between rounded-md border border-stone-300
          bg-white pl-2.5 font-medium text-stone-600 shadow-sm outline-none
          focus-within:border-indigo-600 focus-within:text-stone-800 focus-within:ring-1 focus-within:ring-indigo-600
          hover:text-stone-800 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400
          dark:focus-within:border-indigo-500 dark:focus-within:text-stone-100 dark:focus-within:ring-indigo-500
          dark:hover:text-stone-100"
    >
      <span className="flex items-center transition-colors duration-200">
        {Icon && <Icon className="mr-1.5 h-5 w-5 flex-shrink-0" />}
        <span className="block truncate">{label}</span>
      </span>
      <span className="pointer-events-none ml-3 flex h-10 w-10 items-center justify-center transition-colors duration-200">
        <SelectorIcon className="h-4.5 w-4.5" />
      </span>
    </button>
  );
}

SelectedTool.defaultProps = {
  icon: undefined,
  label: 'No tool is selected',
};

SelectedTool.propTypes = {
  icon: PropTypes.object,
  onToggle: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export default SelectedTool;
