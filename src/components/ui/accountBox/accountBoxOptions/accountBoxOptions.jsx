import React from 'react';
import { CogIcon, LogoutIcon, UserIcon } from '@heroicons/react/solid';
import { logOut } from 'store/auth/auth.actions';
import { useDispatch } from 'react-redux';
import AccountBoxLink from 'components/ui/accountBox/accountBoxLink/accountBoxLink';
import AccountBoxBtn from 'components/ui/accountBox/accountBoxBtn/accountBoxBtn';

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
