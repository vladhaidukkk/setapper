import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavItem({ path, children }) {
  return (
    <li>
      <Link
        to={path}
        className="block rounded-md px-3.5 py-1.5 text-sm font-medium text-stone-700 outline-none transition-colors
        hover:bg-stone-200 hover:text-black hover:ring-1 hover:ring-stone-300 focus:bg-stone-200 focus:text-black focus:ring-1
        focus:ring-stone-300 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-white dark:hover:ring-stone-700
        dark:focus:bg-stone-800 dark:focus:text-white dark:focus:ring-stone-700"
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
