import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserById } from '../../../store/users/users.selectors';
import { getSetupById } from '../../../store/setups/setups.selectors';
import { toolConstants } from '../../../utils/constants';
import { removeAccess, updateAccess } from '../../../store/accesses/accesses.actions';
import { getAccountId } from '../../../store/auth/auth.selectors';
import { useModal } from '../../../hooks';
import AccessDeletionPopup from '../accessDeletionPopup';

function AccessItem({ access }) {
  const dispatch = useDispatch();
  const accountId = useSelector(getAccountId());
  const owner = useSelector(getUserById(access.ownerId));
  const user = useSelector(getUserById(access.userId));
  const setup = useSelector(getSetupById(access.setupId));
  const { open, close } = useModal();

  const SetupIcon = toolConstants.LIST.find((tool) => tool.value === setup.tool).icon;

  const handleAccept = () => {
    dispatch(updateAccess(access._id, { isAccepted: true }));
  };

  const handleConfirmDeletion = () => {
    close();
    dispatch(removeAccess(access._id));
  };

  const handleDelete = () => {
    open(<AccessDeletionPopup onConfirm={handleConfirmDeletion} onCancel={close} />);
  };

  return (
    <div
      className={`block rounded-md border border-stone-300 bg-white p-2.5 shadow-sm transition-all
        duration-200 hover:scale-[97%] hover:shadow dark:border-stone-700 dark:bg-stone-800`}
    >
      <div className="mb-1 flex items-center text-black dark:text-white">
        <SetupIcon className="mr-1.5 h-4.5 w-4.5" />
        <span className="truncate">{setup.title}</span>
      </div>
      <div className="mb-1.5 truncate text-xs text-stone-800 dark:text-stone-200">
        {accountId === owner._id ? `User: ${user.email}` : `Owner: ${owner.email}`}
      </div>
      <div className="flex items-center space-x-2.5 pt-1">
        {(access.isAccepted || access.ownerId === accountId) && (
          <Link
            to={`/builder/${setup.tool}/${setup._id}`}
            className="flex flex-1 justify-center rounded-md border border-stone-300 bg-stone-100 px-2 py-1
            text-xs text-stone-600 outline-none transition-colors duration-200 hover:border-indigo-600
            hover:bg-indigo-500 hover:text-white focus:border-indigo-600 focus:bg-indigo-500 focus:text-white dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400 dark:hover:border-indigo-500 dark:hover:bg-indigo-600 dark:hover:text-white dark:focus:border-indigo-500
            dark:focus:bg-indigo-600 dark:focus:text-white"
          >
            View
          </Link>
        )}
        {!access.isAccepted && access.ownerId !== accountId && (
          <button
            type="button"
            onClick={handleAccept}
            className="flex w-full flex-1 justify-center rounded-md border border-stone-300 bg-stone-100 px-2 py-1
            text-xs text-stone-600 outline-none transition-colors duration-200 hover:border-emerald-600
            hover:bg-emerald-500 hover:text-white focus:border-emerald-600 focus:bg-emerald-500 focus:text-white dark:border-stone-700 dark:bg-stone-900
            dark:text-stone-400 dark:hover:border-emerald-500 dark:hover:bg-emerald-600 dark:hover:text-white dark:focus:border-emerald-500
            dark:focus:bg-emerald-600 dark:focus:text-white"
          >
            Accept
          </button>
        )}
        <button
          type="button"
          onClick={handleDelete}
          className="flex w-full flex-1 justify-center rounded-md border border-stone-300 bg-stone-100 px-2 py-1
            text-xs text-stone-600 outline-none transition-colors duration-200 hover:border-rose-600
            hover:bg-rose-500 hover:text-white focus:border-rose-600 focus:bg-rose-500 focus:text-white dark:border-stone-700 dark:bg-stone-900
            dark:text-stone-400 dark:hover:border-rose-500 dark:hover:bg-rose-600 dark:hover:text-white dark:focus:border-rose-500
            dark:focus:bg-rose-600 dark:focus:text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

AccessItem.propTypes = {
  access: PropTypes.object.isRequired,
};

export default AccessItem;
