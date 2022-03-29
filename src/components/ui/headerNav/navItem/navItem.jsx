import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavItem({ path, children }) {
  const { pathname } = useLocation();

  return (
    <li>
      <Link
        to={path}
        className={`flex items-center rounded-md border px-3.5 py-1.5 text-sm font-medium outline-none transition-colors
        duration-200 hover:border-stone-300 hover:bg-stone-200 hover:text-black focus:border-stone-300 focus:bg-stone-200
        focus:text-black dark:text-stone-300 dark:hover:border-stone-700 dark:hover:bg-stone-800 dark:hover:text-white
        dark:focus:border-stone-700 dark:focus:bg-stone-800 dark:focus:text-white ${
          pathname === `${path}`
            ? 'border-stone-300 bg-stone-200 text-black dark:border-stone-700 dark:bg-stone-800 dark:text-white'
            : 'border-transparent text-stone-700 dark:text-stone-300'
        }`}
      >
        {children}
      </Link>
    </li>
  );
}

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavItem;
