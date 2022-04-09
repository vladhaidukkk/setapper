import React from 'react';
import AdjustedImg from 'components/common/adjustedImg';
import { useDropdown, useRandomId } from 'hooks';
import { useSelector } from 'react-redux';
import { getAccountData, getAccountLoadingStatus } from 'store/account/account.selectors';
import { PulsingLoader } from 'components/common/loaders';
import AccountBoxOptions from 'components/ui/accountBox/accountBoxOptions/accountBoxOptions';

function AccountBox() {
  const id = useRandomId('dropdownBox-');
  const { isOpened, toggle } = useDropdown(id);
  const accountData = useSelector(getAccountData());
  const isAccountLoading = useSelector(getAccountLoadingStatus());

  return (
    <div id={id} className="relative">
      <button
        type="button"
        className="block h-10 w-10 overflow-hidden rounded-md border border-stone-200 text-xs text-stone-300 shadow-sm outline-none
        transition-all duration-200 focus-within:scale-95 focus-within:border-stone-300 hover:scale-95
        hover:border-stone-300 dark:border-stone-800 dark:text-stone-700 dark:focus-within:border-stone-700 dark:hover:border-stone-700"
        onClick={toggle}
      >
        {!isAccountLoading && accountData ? (
          <AdjustedImg alt="Avatar" img={accountData.avatarLink} />
        ) : (
          <PulsingLoader />
        )}
      </button>
      <div
        className={`absolute top-full right-0 z-10 min-w-[8rem] translate-y-3 space-y-0.5 rounded-md border border-stone-300
        bg-stone-50 p-2 shadow-md group-hover:block dark:border-stone-700 dark:bg-stone-900 ${
          isOpened ? 'block' : 'hidden'
        }`}
      >
        <AccountBoxOptions />
      </div>
    </div>
  );
}

export default AccountBox;
