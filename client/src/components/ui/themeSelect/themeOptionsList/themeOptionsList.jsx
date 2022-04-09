import React from 'react';
import { themeConstants } from 'utils/constants';
import ThemeOption from 'components/ui/themeSelect/themeOption/themeOption';
import PropTypes from 'prop-types';
import { useTheme } from 'hooks';

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
