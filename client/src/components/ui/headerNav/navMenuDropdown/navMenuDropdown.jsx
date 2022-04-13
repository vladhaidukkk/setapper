import React from 'react';
import {
  HomeIcon,
  LoginIcon,
  MenuAlt2Icon,
  UserAddIcon,
  ViewBoardsIcon,
  ViewGridAddIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import { PrivateElement, PublicElement } from '../../../../hoc';
import { useDropdown, useRandomId } from '../../../../hooks';
import NavMenuItem from '../navMenuItem/navMenuItem';

function NavMenuDropdown() {
  const id = useRandomId('dropdown-');
  const { isOpened, toggle } = useDropdown(id);

  return (
    <div id={id} className="relative block md:hidden">
      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-md border border-stone-300 bg-stone-200 text-stone-700 shadow-sm
        outline-none transition-all duration-200 hover:bg-stone-300 hover:text-black focus:bg-stone-300
        focus:text-black dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700
        dark:hover:text-white dark:focus:bg-stone-700 dark:focus:text-white"
        onClick={toggle}
      >
        <MenuAlt2Icon className="h-6 w-6" />
      </button>
      <div
        className={`absolute top-full left-0 z-10 min-w-[10rem] translate-y-4 rounded-md border border-stone-300 bg-stone-50
        p-2 shadow-md group-hover:block dark:border-stone-700 dark:bg-stone-900 ${isOpened ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col space-y-0.5">
          <NavMenuItem path="/" icon={HomeIcon}>
            Home
          </NavMenuItem>
          <PublicElement>
            <NavMenuItem path="/auth/login" icon={LoginIcon}>
              Log in
            </NavMenuItem>
          </PublicElement>
          <PublicElement>
            <NavMenuItem path="/auth/registration" icon={UserAddIcon}>
              Sign up
            </NavMenuItem>
          </PublicElement>
          <PrivateElement>
            <NavMenuItem path="/dashboard" icon={ViewBoardsIcon}>
              Dashboard
            </NavMenuItem>
          </PrivateElement>
          <PrivateElement>
            <NavMenuItem path="/builder" icon={ViewGridAddIcon}>
              Builder
            </NavMenuItem>
          </PrivateElement>
          <NavMenuItem path="/presets" icon={ViewGridIcon}>
            Presets
          </NavMenuItem>
        </ul>
      </div>
    </div>
  );
}

export default NavMenuDropdown;
