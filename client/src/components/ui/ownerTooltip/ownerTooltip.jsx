import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { UserCircleIcon } from '@heroicons/react/solid';
import { getUserById } from '../../../store/users/users.selectors';
import { useDropdown, useRandomId } from '../../../hooks';
import AdjustedImg from '../../common/adjustedImg';

function OwnerTooltip({ ownerId }) {
  const id = useRandomId('dropdown-');
  const { isOpened, toggle } = useDropdown(id);
  const owner = useSelector(getUserById(ownerId));

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
        <div className="flex items-center space-x-2.5">
          <div className="h-8 w-8 overflow-hidden rounded-md border border-stone-300 shadow-sm dark:border-stone-700">
            <AdjustedImg alt="Owner avatar" img={owner.avatarLink} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-black dark:text-white">{owner.username}</span>
            <span className="text-xs text-stone-800 dark:text-stone-200">{owner.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

OwnerTooltip.propTypes = {
  ownerId: PropTypes.string.isRequired,
};

export default OwnerTooltip;
