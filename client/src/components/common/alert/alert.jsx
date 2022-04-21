import React from 'react';
import PropTypes from 'prop-types';
import { InformationCircleIcon } from '@heroicons/react/solid';

function Alert({ message }) {
  return (
    <div className="flex w-full items-center rounded-md border-indigo-600 bg-indigo-500 px-2.5 py-1.5 text-sm text-white shadow-sm dark:border-indigo-500 dark:bg-indigo-600">
      <InformationCircleIcon className="mr-1.5 h-4 w-4 shrink-0" />
      {message}
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Alert;
