import React from 'react';
import PropTypes from 'prop-types';
import { themeConstants } from '../../../../utils/constants';
import ThemeOption from '../themeOption/themeOption';
import { useTheme } from '../../../../hooks';

function ThemeOptionsList({ onChange }) {
  const { theme } = useTheme();

  return (
    <ul className="flex flex-col space-y-0.5">
      {themeConstants.LIST.map((item) => {
        return (
          <ThemeOption
            key={item.value}
            value={item.value}
            label={item.label}
            icon={item.icon}
            onClick={onChange}
            isSelected={theme === item.value}
          />
        );
      })}
    </ul>
  );
}

ThemeOptionsList.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ThemeOptionsList;
