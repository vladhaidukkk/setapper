import React from 'react';
import { Outlet } from 'react-router-dom';
import NotificationContainer from 'components/ui/notificationContainer';
import { useTheme } from 'hooks';
import { themeConstants } from 'utils/constants';

function Pages() {
  const { theme, themeColor, changeTheme } = useTheme();

  const handleThemeChange = ({ target }) => {
    changeTheme(target.value);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-700 h-screen text-zinc-900 dark:text-zinc-50">
      <header className="bg-slate-200 text-slate-900 dark:text-slate-200 dark:bg-slate-900 p-2 flex items-start space-x-2">
        <ul>
          <li>theme: {theme}</li>
          <li>themeColor: {themeColor}</li>
        </ul>
        <select className="bg-slate-400 dark:bg-slate-700 rounded px-1.5 py-1" onChange={handleThemeChange}>
          <option value={themeConstants.LIGHT}>{themeConstants.LIGHT}</option>
          <option value={themeConstants.DARK}>{themeConstants.DARK}</option>
          <option value={themeConstants.SYSTEM}>{themeConstants.SYSTEM}</option>
        </select>
      </header>
      <Outlet />
      <NotificationContainer />
    </div>
  );
}

export default Pages;
