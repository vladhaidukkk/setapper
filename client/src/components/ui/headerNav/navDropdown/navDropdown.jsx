import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavDropdown({ label, path, pathPrefix, options }) {
  const { pathname } = useLocation();

  return (
    <li className="group relative">
      <Link
        to={path}
        className={`flex items-center rounded-md border px-3.5 py-1.5 text-sm font-medium outline-none transition-colors
        duration-200 focus-within:border-stone-300 focus-within:bg-stone-200 focus-within:text-black group-hover:border-stone-300
        group-hover:bg-stone-200 group-hover:text-black dark:focus-within:border-stone-700
        dark:focus-within:bg-stone-800 dark:focus-within:text-white dark:group-hover:border-stone-700 dark:group-hover:bg-stone-800
        dark:group-hover:text-white ${
          pathname === path
            ? 'border-stone-300 bg-stone-200 text-black dark:border-stone-700 dark:bg-stone-800 dark:text-white'
            : 'border-transparent text-stone-700 dark:text-stone-300'
        }`}
      >
        {label}
        <ChevronDownIcon className="ml-1 -mr-1 h-3.5 w-3.5" />
      </Link>
      <div
        className="absolute top-full left-0 z-50 hidden min-w-[10rem] translate-y-4 rounded-md border border-stone-300 bg-stone-50 p-2 shadow-md
        before:absolute before:left-0 before:bottom-full before:block before:h-5 before:w-full before:bg-transparent after:absolute after:left-0
        after:top-full after:block after:h-2 after:w-full after:bg-transparent group-hover:block dark:border-stone-700 dark:bg-stone-900"
      >
        <ul className="flex flex-col space-y-0.5">
          {options.map((option) => {
            const optionPath = option.index ? pathPrefix : `${pathPrefix}/${option.path}`;

            return (
              <li key={option.label}>
                <Link
                  to={optionPath}
                  className={`flex items-center rounded-md border px-2.5 py-1 text-sm font-medium outline-none
                transition-colors duration-200 hover:border-stone-300 hover:bg-stone-200 hover:text-black focus:border-stone-300 focus:bg-stone-200 focus:text-black
                dark:hover:border-stone-700 dark:hover:bg-stone-800 dark:hover:text-white dark:focus:border-stone-700
                dark:focus:bg-stone-800 dark:focus:text-white ${
                  pathname === optionPath
                    ? 'border-stone-300 bg-stone-200 text-black dark:border-stone-700 dark:bg-stone-800 dark:text-white'
                    : 'border-transparent text-stone-700 dark:text-stone-300'
                }`}
                >
                  {option.icon && <option.icon className="mr-1.5 h-4 w-4" />}
                  {option.label}
                </Link>
                {option.divided && <div className="mb-1 mt-1.5 h-px w-full bg-stone-300 dark:bg-stone-700" />}
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}

NavDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  pathPrefix: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavDropdown;
