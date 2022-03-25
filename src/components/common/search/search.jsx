import React from 'react';
import PropTypes from 'prop-types';
import { SearchIcon } from '@heroicons/react/solid';

function Search({ id, value, onChange, placeholder }) {
  const handleChange = ({ target }) => {
    onChange(target.value);
  };

  return (
    <label
      htmlFor={id}
      className="flex h-full flex-1 cursor-pointer items-center pl-2.5 pr-3.5 text-gray-400
      focus-within:text-gray-600 hover:text-gray-600 dark:text-neutral-400 dark:focus-within:text-neutral-100
      dark:hover:text-neutral-100"
    >
      <SearchIcon className="mr-1.5 h-5 w-5 flex-none" />
      <input
        id={id}
        type="text"
        value={value}
        className="h-full w-full flex-1 border-none bg-transparent p-0 placeholder-gray-400 outline-none dark:placeholder-neutral-400"
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
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Search;
