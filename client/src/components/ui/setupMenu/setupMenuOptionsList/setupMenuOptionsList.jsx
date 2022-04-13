import React from 'react';
import PropTypes from 'prop-types';
import SetupMenuOption from '../setupMenuOption/setupMenuOption';

function SetupMenuOptionsList({ options }) {
  return (
    <ul className="flex flex-col space-y-0.5">
      {options.map((option) => {
        return <SetupMenuOption key={option.label} label={option.label} onClick={option.onClick} icon={option.icon} />;
      })}
    </ul>
  );
}

SetupMenuOptionsList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SetupMenuOptionsList;
