import React from 'react';
import { Link } from 'react-router-dom';
import { CodeIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';

function PresetsOption({ label, tool, icon: Icon }) {
  return (
    <li>
      <Link
        to={`/presets/${tool}`}
        className="group flex items-center justify-between rounded-md border border-stone-300 bg-stone-200 bg-opacity-40 p-2.5 text-lg text-black shadow transition-all duration-200 hover:-translate-y-1 hover:border-indigo-600 hover:shadow-lg focus:border-indigo-600 dark:border-stone-700 dark:bg-stone-800 dark:text-white dark:hover:border-indigo-500 dark:focus:border-indigo-500"
      >
        <div className="flex items-center">
          <Icon className="mr-2.5 h-6 w-6" />
          <span className="font-medium">{label}</span>
        </div>
        <CodeIcon className="h-5 w-5 text-stone-600 transition-colors duration-200 group-hover:text-indigo-600 group-focus:text-indigo-600 dark:text-stone-400 dark:group-hover:text-indigo-500 dark:group-focus:text-indigo-500" />
      </Link>
    </li>
  );
}

PresetsOption.propTypes = {
  label: PropTypes.string.isRequired,
  tool: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default PresetsOption;
