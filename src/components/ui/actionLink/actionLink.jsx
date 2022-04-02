import React from 'react';
import { ArrowSmRightIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ActionLink({ path, text, color }) {
  const getClasses = () => {
    let classes =
      'text-md group flex items-center justify-between rounded-md border px-4 py-2 text-white shadow outline-none transition-all dark:bg-transparent sm:text-lg md:text-xl';

    switch (color) {
      case 'indigo':
        classes +=
          ' border-indigo-600 bg-indigo-500 dark:border-indigo-500 dark:hover:bg-indigo-600 dark:focus:bg-indigo-600';
        break;
      case 'violet':
        classes +=
          ' border-violet-600 bg-violet-500 dark:border-violet-500 dark:hover:bg-violet-600 dark:focus:bg-violet-600';
        break;
      default:
        classes +=
          ' border-indigo-600 bg-indigo-500 dark:border-indigo-500 dark:hover:bg-indigo-600 dark:focus:bg-indigo-600';
    }

    return classes;
  };

  return (
    <Link to={path} className={getClasses()}>
      {text}
      <ArrowSmRightIcon className="ml-2.5 h-6 w-6 text-white transition-all group-hover:w-0 group-focus:w-0 dark:text-indigo-500" />
    </Link>
  );
}

ActionLink.defaultProps = {
  color: 'indigo',
};

ActionLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default ActionLink;
