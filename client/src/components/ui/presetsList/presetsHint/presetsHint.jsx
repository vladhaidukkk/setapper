import React from 'react';
import { BanIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';

function PresetsHint({ text }) {
  return (
    <div className="flex w-max items-center rounded-md border border-stone-300 bg-white p-1.5 pr-2.5 text-sm text-stone-600 shadow-sm dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400">
      <BanIcon className="mr-1 h-4.5 w-4.5" />
      <div>{text}</div>
    </div>
  );
}

PresetsHint.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PresetsHint;
