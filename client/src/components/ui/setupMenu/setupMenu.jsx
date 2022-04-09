import React from 'react';
import { useDropdown, useRandomId } from 'hooks';
import { DotsHorizontalIcon, PencilAltIcon, ShareIcon, TrashIcon } from '@heroicons/react/solid';
import SetupMenuOptionsList from 'components/ui/setupMenu/setupMenuOptionsList/setupMenuOptionsList';
import { useParams, useNavigate } from 'react-router-dom';
import { removeSetup } from 'store/setups/setups.actions';
import { useDispatch } from 'react-redux';
import useModal from 'hooks/useModal';
import ConfirmDeletionPopup from 'components/ui/confirmDeletionPopup';
import ShareSetupPopup from 'components/ui/shareSetupPopup';

function SetupMenu() {
  const { tool, setupId } = useParams();
  const dispatch = useDispatch();
  const id = useRandomId('dropdown-');
  const navigate = useNavigate();
  const { isOpened, toggle } = useDropdown(id);
  const { open, close } = useModal();

  const handleShareSubmit = (data) => {
    console.log(data);
  };

  const handleShare = () => {
    open(<ShareSetupPopup onSubmit={handleShareSubmit} />);
    toggle();
  };

  const handleEdit = () => {
    navigate(`/builder/${tool}/${setupId}/edit`);
  };

  const handleConfirmDeletion = () => {
    close();
    dispatch(removeSetup(setupId, `/builder/${tool}`));
  };

  const handleDelete = () => {
    open(<ConfirmDeletionPopup onConfirm={handleConfirmDeletion} onCancel={close} />);
    toggle();
  };

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
        <DotsHorizontalIcon className="h-5 w-5" />
      </button>
      <div
        className={`absolute top-full right-0 z-10 min-w-[8rem] translate-y-2 rounded-md border border-stone-300 bg-stone-50
        p-2 shadow-md dark:border-stone-700 dark:bg-stone-900 ${isOpened ? 'block' : 'hidden'}`}
      >
        <SetupMenuOptionsList
          options={[
            { label: 'Share', onClick: handleShare, icon: ShareIcon },
            { label: 'Edit', onClick: handleEdit, icon: PencilAltIcon },
            { label: 'Delete', onClick: handleDelete, icon: TrashIcon },
          ]}
        />
      </div>
    </div>
  );
}

export default SetupMenu;
