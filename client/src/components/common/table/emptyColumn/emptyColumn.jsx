import React from 'react';
import { BanIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';

function EmptyColumn({ text }) {
  return (
    <div className="flex w-max items-center p-2.5 text-sm text-stone-600 dark:text-stone-400">
      <BanIcon className="mr-1 h-4.5 w-4.5" />
      <div>{text}</div>
    </div>
  );
}

EmptyColumn.propTypes = {
  text: PropTypes.string.isRequired,
};

export default EmptyColumn;
