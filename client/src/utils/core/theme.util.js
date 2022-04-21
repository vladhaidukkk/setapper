import { themeConstants } from '../constants';

const getSystemTheme = () => {
  const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  return isLight ? themeConstants.LIGHT : themeConstants.DARK;
};

const trackSystemTheme = (callback) => {
  const systemThemeTracker = window.matchMedia('(prefers-color-scheme: light)');
  systemThemeTracker.addEventListener('change', callback);

  return () => {
    systemThemeTracker.removeEventListener('change', callback);
  };
};

const themeUtil = {
  getSystemTheme,
  trackSystemTheme,
};

export default themeUtil;
