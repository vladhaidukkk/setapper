import React from 'react';
import { CogIcon, LogoutIcon, UserIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../../store/auth/auth.actions';
import AccountBoxLink from '../accountBoxLink/accountBoxLink';
import AccountBoxBtn from '../accountBoxBtn/accountBoxBtn';

function AccountBoxOptions() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <ul className="flex flex-col space-y-0.5">
        <AccountBoxLink path="/settings/profile" icon={UserIcon} label="Profile" />
        <AccountBoxLink path="/settings" icon={CogIcon} label="Settings" />
      </ul>
      <div>
        <div className="my-1 h-px w-full bg-stone-300 dark:bg-stone-700" />
      </div>
      <ul className="flex flex-col">
        <AccountBoxBtn onClick={handleLogOut} label="Log out" icon={LogoutIcon} />
      </ul>
    </>
  );
}

export default AccountBoxOptions;
