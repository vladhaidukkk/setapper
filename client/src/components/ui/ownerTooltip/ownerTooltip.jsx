import React from 'react';
import PropTypes from 'prop-types';
import { UserCircleIcon } from '@heroicons/react/solid';
import { useDropdown, useRandomId } from '../../../hooks';
import UserInfo from '../../common/userInfo';

function OwnerTooltip({ ownerId }) {
  const id = useRandomId('dropdown-');
  const { isOpened, toggle } = useDropdown(id);

  return (
    <div id={id} className="relative">
      <button
        type="button"
        className="dark flex h-8 w-8 items-center justify-center rounded-md border border-stone-300 bg-stone-100
        text-stone-700 shadow-sm outline-none transition-all duration-200 hover:bg-stone-200 hover:text-black
        focus:bg-stone-200 focus:text-black dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300 dark:hover:border-stone-600 dark:hover:bg-stone-700 dark:hover:text-white
        dark:focus:border-stone-600 dark:focus:bg-stone-700 dark:focus:text-white"
        onClick={toggle}
      >
        <UserCircleIcon className="h-5 w-5" />
      </button>
      <div
        className={`absolute top-full right-0 z-10 min-w-[12rem] translate-y-2 space-y-1.5 rounded-md border border-stone-300 bg-stone-50 p-2
        shadow-md dark:border-stone-700 dark:bg-stone-900 ${isOpened ? 'block' : 'hidden'}`}
      >
        <UserInfo userId={ownerId} />
      </div>
    </div>
  );
}

OwnerTooltip.propTypes = {
  ownerId: PropTypes.string.isRequired,
};

export default OwnerTooltip;
