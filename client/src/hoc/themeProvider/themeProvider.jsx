import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../contexts';
import { localStorageService } from '../../services';
import { themeUtil } from '../../utils/core';
import { themeConstants } from '../../utils/constants';

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorageService.getTheme() || themeConstants.SYSTEM);
  const [systemTheme, setSystemTheme] = useState(themeUtil.getSystemTheme());
  const themeColor = theme === themeConstants.SYSTEM ? systemTheme : theme;

  useEffect(() => {
    const destroySystemThemeTracker = themeUtil.trackSystemTheme(() => {
      setSystemTheme(() => themeUtil.getSystemTheme());
    });
    return () => destroySystemThemeTracker();
  }, []);

  useEffect(() => {
    localStorageService.setTheme(theme);
    document.body.className = `antialiased ${themeColor === themeConstants.LIGHT ? 'bg-stone-50' : 'bg-stone-900'}`;
  }, [theme]);

  const changeTheme = (newTheme) => {
    setTheme(() => newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, themeColor, changeTheme }}>
      <div className={themeColor === themeConstants.LIGHT ? undefined : 'dark'}>{children}</div>
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default ThemeProvider;
