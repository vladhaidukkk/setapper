import React from 'react';
import { PlusIcon } from '@heroicons/react/solid';
import { Link, useParams } from 'react-router-dom';

function NewSetupBtn() {
  const { tool } = useParams();

  return (
    <Link
      to={`/builder/${tool}`}
      className="flex h-full basis-10 items-center justify-center rounded bg-sky-300 shadow"
    >
      <PlusIcon className="h-5 w-5" />
    </Link>
  );
}

export default NewSetupBtn;