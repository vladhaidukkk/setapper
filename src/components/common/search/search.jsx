import React from 'react';
import PropTypes from 'prop-types';
import { SearchIcon } from '@heroicons/react/solid';
import { useRandomId } from 'hooks';

function Search({ value, onChange, placeholder }) {
  const id = useRandomId('search-');

  const handleChange = ({ target }) => {
    onChange(target.value);
  };

  return (
    <label
      htmlFor={id}
      className="flex h-full flex-1 cursor-pointer items-center pl-2.5 text-stone-600 transition-colors
      duration-200 focus-within:text-stone-800 hover:text-stone-800 dark:text-stone-400
      dark:focus-within:text-stone-100 dark:hover:text-stone-100"
    >
      <SearchIcon className="mr-1.5 h-4.5 w-4.5 flex-none" />
      <input
        id={id}
        type="text"
        value={value}
        className="h-full w-full flex-1 border-0 bg-transparent p-0 placeholder-stone-600 focus:ring-0 dark:placeholder-stone-400"
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete="off"
      />
    </label>
  );
}

Search.defaultProps = {
  placeholder: 'Search...',
};

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Search;
