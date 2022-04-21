import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { getSetupById } from '../../../store/setups/setups.selectors';
import SetupPanel from '../../ui/setupPanel';
import SetupMenu from '../../ui/setupMenu';
import DetailInfo from '../../ui/detailInfo';
import { getAccountId } from '../../../store/auth/auth.selectors';
import OwnerTooltip from '../../ui/ownerTooltip';
import SetupComments from '../../ui/setupComments';

function SetupViewer() {
  const { setupId } = useParams();
  const accountId = useSelector(getAccountId());
  const setup = useSelector(getSetupById(setupId));

  return (
    <div className="grid flex-1 grid-cols-12 gap-x-2.5 p-2.5 pb-0">
      <div className="col-span-7 flex flex-col overflow-y-auto px-1 pb-2.5">
        <div className="flex items-start justify-between space-x-2.5">
          <h2 className="text-2xl font-medium text-black dark:text-white">{setup.title}</h2>
          {accountId === setup.ownerId ? <SetupMenu /> : <OwnerTooltip ownerId={setup.ownerId} />}
        </div>
        <p className="mb-2 text-lg text-stone-800 dark:text-stone-200">{setup.description}</p>
        <div className="mb-2.5 flex space-x-2.5">
          <DetailInfo label="version:" value={setup.version} />
          <DetailInfo label="created:" value={moment(setup.createdAt).format('MMM Do YY')} />
          <DetailInfo label="modified:" value={moment(setup.updatedAt).format('MMM Do YY')} />
        </div>
        <SetupComments />
      </div>
      <div className="col-span-5 -mx-2.5 flex flex-col overflow-y-auto p-2.5 pt-0">
        <SetupPanel data={setup} />
      </div>
    </div>
  );
}

export default SetupViewer;
