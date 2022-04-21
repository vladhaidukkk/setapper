import React from 'react';
import { useDropdown, useRandomId, useTheme } from '../../../hooks';
import { themeConstants } from '../../../utils/constants';
import ThemeOptionsList from './themeOptionsList/themeOptionsList';

function ThemeSelect() {
  const id = useRandomId('dropdown-');
  const { isOpened, toggle } = useDropdown(id);
  const { themeColor, changeTheme } = useTheme();

  const handleChange = (newTheme) => {
    changeTheme(newTheme);
    toggle();
  };

  return (
    <div id={id} className="relative">
      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-md border border-stone-300 bg-stone-200 text-stone-700
        shadow-sm outline-none transition-all duration-200 hover:bg-stone-300 hover:text-black focus:bg-stone-300
        focus:text-black dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700
        dark:hover:text-white dark:focus:bg-stone-700 dark:focus:text-white"
        onClick={toggle}
      >
        {themeColor === themeConstants.LIGHT ? (
          <themeConstants.LIGHT_ICON className="h-5 w-5" />
        ) : (
          <themeConstants.DARK_ICON className="h-5 w-5" />
        )}
      </button>
      <div
        className={`absolute top-full right-0 z-10 min-w-[8rem] translate-y-4 rounded-md border border-stone-300 bg-stone-50
        p-2 shadow-md dark:border-stone-700 dark:bg-stone-900 ${isOpened ? 'block' : 'hidden'}`}
      >
        <ThemeOptionsList onChange={handleChange} />
      </div>
    </div>
  );
}

export default ThemeSelect;
