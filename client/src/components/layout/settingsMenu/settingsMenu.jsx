import React from 'react';
import { useDispatch } from 'react-redux';
import { LogoutIcon } from '@heroicons/react/solid';
import { settingsConstants } from '../../../utils/constants';
import SettingsSection from '../../ui/settingsSection';
import { logOut } from '../../../store/auth/auth.actions';

function SettingsMenu() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="hidden flex-col justify-between  space-y-2 overflow-hidden rounded-md border border-stone-200 bg-stone-50 p-2 dark:border-stone-700 dark:bg-stone-900 lg:flex lg:w-48 xl:w-56">
      <ul className="space-y-2">
        {settingsConstants.MENU_LIST.map((item) => {
          return <SettingsSection key={item.path} {...item} />;
        })}
      </ul>
      <ul>
        <li>
          <button
            type="button"
            className="flex w-full items-center rounded-md border border-stone-300 bg-white px-2.5 py-1.5 text-sm text-black transition-all duration-200 hover:scale-[97%] hover:shadow-md dark:border-stone-700 dark:bg-stone-800 dark:text-white"
            onClick={handleLogOut}
          >
            <LogoutIcon className="mr-2.5 h-4 w-4" />
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SettingsMenu;
