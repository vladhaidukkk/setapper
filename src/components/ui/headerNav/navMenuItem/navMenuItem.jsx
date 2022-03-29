import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavMenuItem({ path, icon: Icon, children }) {
  const { pathname } = useLocation();

  return (
    <li>
      <Link
        to={path}
        className={`flex items-center rounded-md px-2.5 py-1 text-sm font-medium text-stone-700 outline-none transition-colors
                hover:bg-stone-200 hover:text-black hover:ring-1 hover:ring-stone-300 focus:bg-stone-200 focus:text-black focus:ring-1 focus:ring-stone-300
                dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-white dark:hover:ring-stone-700 dark:focus:bg-stone-800
                dark:focus:text-white dark:focus:ring-stone-700 ${
                  pathname === `/${path}`
                    ? 'bg-stone-200 text-black dark:bg-stone-800 dark:text-white'
                    : 'text-stone-700 dark:text-stone-300'
                }`}
      >
        {Icon && <Icon className="mr-1.5 h-4 w-4" />}
        {children}
      </Link>
    </li>
  );
}

NavMenuItem.defaultProps = {
  icon: undefined,
};

NavMenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default NavMenuItem;
