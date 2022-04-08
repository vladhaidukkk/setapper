import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSetupById } from 'store/setups/setups.selectors';
import SetupPanel from 'components/ui/setupPanel';
import moment from 'moment';
import SetupMenu from 'components/ui/setupMenu';

function SetupViewer() {
  const { setupId } = useParams();
  const setup = useSelector(getSetupById(setupId));

  return (
    <div className="grid flex-1 grid-cols-12 gap-x-2.5 py-2.5 px-3.5 pb-0">
      <div className="col-span-7 flex flex-col space-y-2.5 overflow-y-auto">
        <div className="flex items-start justify-between space-x-2.5">
          <h2 className="text-2xl font-medium text-black dark:text-white">{setup.title}</h2>
          <SetupMenu />
        </div>
        <p className="text-sm text-stone-600 dark:text-stone-400">version: {setup.version}</p>
        <p className="text-lg text-stone-800 dark:text-stone-200">{setup.description}</p>
        <div>
          <span>created: {moment(setup.createdAt).format('MMM Do YY')}</span>
          <span>modified:{moment(setup.modifiedAt).format('MMM Do YY')}</span>
        </div>
        <div className="overflow-y-auto px-1 pb-2.5">comments</div>
      </div>
      <div className="col-span-5 -mx-2.5 flex flex-col overflow-y-auto p-2.5 pt-0">
        <SetupPanel data={setup} />
      </div>
    </div>
  );
}

export default SetupViewer;
