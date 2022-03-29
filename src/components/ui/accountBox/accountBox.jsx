import React from 'react';
import AdjustedImg from 'components/common/adjustedImg';
import { Link } from 'react-router-dom';
import { useDropdown, useRandomId } from 'hooks';
import { logOut } from 'store/auth/auth.actions';
import { useDispatch } from 'react-redux';
import { CogIcon, LogoutIcon, UserIcon } from '@heroicons/react/solid';

function AccountBox() {
  const dispatch = useDispatch();
  const id = useRandomId('dropdownBox-');
  const { isOpened, toggle } = useDropdown(id);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div id={id} className="relative">
      <button
        type="button"
        className="block h-10 w-10 overflow-hidden rounded-md border border-stone-200 text-xs shadow-md outline-none
        transition-all focus-within:scale-95 focus-within:border-stone-300 hover:scale-95 hover:border-stone-300
        dark:border-stone-800 dark:focus-within:border-stone-700 dark:hover:border-stone-700"
        onClick={toggle}
      >
        <AdjustedImg
          alt="Avatar"
          img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
      </button>
      <div
        className={`absolute top-full right-0 z-10 min-w-[8rem] translate-y-2.5 space-y-0.5 rounded-md border border-stone-300
        bg-stone-50 p-2 shadow-md group-hover:block dark:border-stone-700 dark:bg-stone-900 ${
          isOpened ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col">
          <li>
            <Link
              to="settings/profile"
              className="flex w-full items-center rounded-md px-2.5 py-1 text-sm font-medium text-stone-700 outline-none transition-all
                hover:bg-stone-200 hover:text-black hover:ring-1 hover:ring-stone-300 focus:bg-stone-200 focus:text-black focus:ring-1 focus:ring-stone-300 dark:text-stone-300 dark:hover:bg-stone-800
                dark:hover:text-white dark:hover:ring-stone-700 dark:focus:bg-stone-800 dark:focus:text-white dark:focus:ring-stone-700"
            >
              <UserIcon className="mr-1.5 h-4 w-4" />
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="settings"
              className="flex w-full items-center rounded-md px-2.5 py-1 text-sm font-medium text-stone-700 outline-none transition-all
                hover:bg-stone-200 hover:text-black hover:ring-1 hover:ring-stone-300 focus:bg-stone-200 focus:text-black focus:ring-1 focus:ring-stone-300 dark:text-stone-300 dark:hover:bg-stone-800
                dark:hover:text-white dark:hover:ring-stone-700 dark:focus:bg-stone-800 dark:focus:text-white dark:focus:ring-stone-700"
            >
              <CogIcon className="mr-1.5 h-4 w-4" />
              Settings
            </Link>
          </li>
        </ul>
        <div>
          <div className="my-1 h-px w-full bg-stone-300 dark:bg-stone-700" />
        </div>
        <ul className="flex flex-col">
          <li>
            <button
              type="button"
              className="flex w-full items-center rounded-md px-2.5 py-1 text-sm font-medium text-stone-700 outline-none transition-all
                hover:bg-stone-200 hover:text-black hover:ring-1 hover:ring-stone-300 focus:bg-stone-200 focus:text-black focus:ring-1 focus:ring-stone-300 dark:text-stone-300 dark:hover:bg-stone-800
                dark:hover:text-white dark:hover:ring-stone-700 dark:focus:bg-stone-800 dark:focus:text-white dark:focus:ring-stone-700"
              onClick={handleLogOut}
            >
              <LogoutIcon className="mr-1.5 h-4 w-4" />
              Log out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AccountBox;
