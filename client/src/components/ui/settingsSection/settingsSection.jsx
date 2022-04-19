import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SettingsSection({ path, label, icon: Icon }) {
  return (
    <li>
      <Link
        to={`/settings/${path}`}
        className="flex items-center rounded-md border border-stone-300 bg-white px-2.5 py-1.5 text-sm text-black transition-all duration-200 hover:scale-[97%] hover:shadow dark:border-stone-700 dark:bg-stone-800 dark:text-white"
      >
        {Icon && <Icon className="mr-1.5 h-3.5 w-3.5" />}
        <span>{label}</span>
      </Link>
    </li>
  );
}

SettingsSection.defaultProps = {
  icon: undefined,
};

SettingsSection.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.object,
};

export default SettingsSection;
