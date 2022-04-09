import React from 'react';
import PropTypes from 'prop-types';

function DetailInfo({ label, value }) {
  return (
    <span className="rounded-md border border-stone-300 bg-stone-100 px-2.5 py-1 text-xs text-stone-600 shadow-sm dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400">
      <span className="font-medium">{label}</span> {value}
    </span>
  );
}

DetailInfo.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default DetailInfo;
