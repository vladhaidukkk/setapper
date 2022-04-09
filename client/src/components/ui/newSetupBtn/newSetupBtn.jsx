import React from 'react';
import { PlusIcon } from '@heroicons/react/solid';
import { Link, useParams } from 'react-router-dom';

function NewSetupBtn() {
  const { tool } = useParams();

  return (
    <Link
      to={`/builder/${tool}`}
      className="flex h-full basis-10 items-center justify-center rounded-md border border-stone-300 bg-white text-stone-600 shadow-sm
          outline-none transition-colors duration-200 hover:border-indigo-600
          hover:bg-indigo-500 hover:text-white focus:border-indigo-600 focus:bg-indigo-500 focus:text-white dark:border-stone-700
          dark:bg-stone-800 dark:text-stone-400 dark:hover:border-indigo-500 dark:hover:bg-indigo-600
          dark:hover:text-white dark:focus:border-indigo-500 dark:focus:bg-indigo-600 dark:focus:text-white"
    >
      <PlusIcon className="h-5 w-5" />
    </Link>
  );
}

export default NewSetupBtn;
