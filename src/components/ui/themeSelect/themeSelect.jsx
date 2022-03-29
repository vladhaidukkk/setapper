import React from 'react';
import { DesktopComputerIcon, MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useDropdown, useRandomId, useTheme } from 'hooks';
import { themeConstants } from 'utils/constants';

function ThemeSelect() {
  const id = useRandomId('dropdown-');
  const { isOpened, toggle } = useDropdown(id);
  const { theme, themeColor, changeTheme } = useTheme();

  const handleChange = (newTheme) => {
    changeTheme(newTheme);
    toggle();
  };

  return (
    <div id={id} className="relative">
      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-md border border-stone-300 bg-stone-200 text-stone-700
        outline-none transition-all duration-200 hover:bg-stone-300 hover:text-black focus:bg-stone-300 focus:text-black
        dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700 dark:hover:text-white
        dark:focus:bg-stone-700 dark:focus:text-white"
        onClick={toggle}
      >
        {themeColor === themeConstants.LIGHT ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-5 w-5" />}
      </button>
      <div
        className={`absolute top-full right-0 z-10 min-w-[8rem] translate-y-4 rounded-md border border-stone-300 bg-stone-50
        p-2 shadow-md group-hover:block dark:border-stone-700 dark:bg-stone-900 ${isOpened ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col space-y-0.5">
          <li>
            <button
              type="button"
              className={`hover:stone-stone-300 focus:stone-stone-300 dark:hover:stone-stone-700 dark:focus:stone-stone-700 flex w-full items-center rounded-md border px-2.5 py-1
              text-sm font-medium outline-none transition-all transition-all duration-200
              hover:bg-stone-200 hover:text-black focus:bg-stone-200 focus:text-black
              dark:hover:bg-stone-800 dark:hover:text-white dark:focus:bg-stone-800 dark:focus:text-white ${
                theme === themeConstants.LIGHT
                  ? 'border-stone-300 bg-stone-200 text-black dark:border-stone-700 dark:bg-stone-800 dark:text-white'
                  : 'border-transparent text-stone-700 dark:text-stone-300'
              }`}
              onClick={() => handleChange(themeConstants.LIGHT)}
            >
              <SunIcon className="mr-1.5 h-4 w-4" />
              Light
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`flex w-full items-center rounded-md border px-2.5 py-1 text-sm font-medium outline-none transition-all
              transition-all duration-200 hover:border-stone-300 hover:bg-stone-200 hover:text-black focus:border-stone-300
              focus:bg-stone-200 focus:text-black dark:hover:border-stone-700 dark:hover:bg-stone-800
              dark:hover:text-white dark:focus:border-stone-700 dark:focus:bg-stone-800 dark:focus:text-white ${
                theme === themeConstants.DARK
                  ? 'border-stone-300 bg-stone-200 text-black dark:border-stone-700 dark:bg-stone-800 dark:text-white'
                  : 'border-transparent text-stone-700 dark:text-stone-300'
              }`}
              onClick={() => handleChange(themeConstants.DARK)}
            >
              <MoonIcon className="mr-1.5 h-4 w-4" />
              Dark
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`flex w-full items-center rounded-md border px-2.5 py-1 text-sm font-medium outline-none transition-all
              transition-all duration-200 hover:border-stone-300 hover:bg-stone-200 hover:text-black focus:border-stone-300
              focus:bg-stone-200 focus:text-black dark:hover:border-stone-700 dark:hover:bg-stone-800
              dark:hover:text-white dark:focus:border-stone-700 dark:focus:bg-stone-800 dark:focus:text-white ${
                theme === themeConstants.SYSTEM
                  ? 'border-stone-300 bg-stone-200 text-black dark:border-stone-700 dark:bg-stone-800 dark:text-white'
                  : 'border-transparent text-stone-700 dark:text-stone-300'
              }`}
              onClick={() => handleChange(themeConstants.SYSTEM)}
            >
              <DesktopComputerIcon className="mr-1.5 h-4 w-4" />
              System
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ThemeSelect;
