import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSetupById } from 'store/setups/setups.selectors';

function SetupEditor() {
  const { setupId } = useParams();
  const setup = useSelector(getSetupById(setupId));

  return (
    <div className="flex-1 space-y-2 p-2.5">
      <h2 className="text-4xl font-medium">{setup?.title}</h2>
      <p className="text-lg italic">{setup?.description}</p>
      <div className="w-max rounded border bg-sky-300 px-2 py-0.5 shadow">{setup?.tool}</div>
    </div>
  );
}

export default SetupEditor;
