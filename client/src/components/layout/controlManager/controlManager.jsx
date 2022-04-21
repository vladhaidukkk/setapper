import React from 'react';
import { useSelector } from 'react-redux';
import {
  getAccessesLoadingStatus,
  getCreatedByYouAcceptedAccesses,
  getCreatedByYouNotAcceptedAccesses,
  getGivenAcceptedAccesses,
  getGivenNotAcceptedAccesses,
} from '../../../store/accesses/accesses.selectors';
import Table, { ColumnBody, ColumnCaption, EmptyColumn, TableColumn } from '../../common/table';
import AccessItem from '../../ui/accessItem';
import { SpinLoader } from '../../common/loaders';
import { getUsersLoadingStatus } from '../../../store/users/users.selectors';
import { getSetupsLoadingStatus } from '../../../store/setups/setups.selectors';

function ControlManager() {
  const isAccessesLoading = useSelector(getAccessesLoadingStatus());
  const isUsersLoading = useSelector(getUsersLoadingStatus());
  const isSetupsLoading = useSelector(getSetupsLoadingStatus());
  const sharedByYouAccepted = useSelector(getCreatedByYouAcceptedAccesses());
  const sharedByYouNotAccepted = useSelector(getCreatedByYouNotAcceptedAccesses());
  const sharedToYouAccepted = useSelector(getGivenAcceptedAccesses());
  const sharedToYouNotAccepted = useSelector(getGivenNotAcceptedAccesses());

  return (
    <div className="mt-1">
      {!isAccessesLoading && !isUsersLoading && !isSetupsLoading ? (
        <Table>
          <TableColumn>
            <ColumnCaption hint="accepted">Shared by you</ColumnCaption>
            {sharedByYouAccepted.length !== 0 ? (
              <ColumnBody
                content={sharedByYouAccepted.map((access) => {
                  return <AccessItem key={access._id} access={access} />;
                })}
              />
            ) : (
              <EmptyColumn text="No accesses" />
            )}
          </TableColumn>
          <TableColumn>
            <ColumnCaption hint="not accepted">Shared by you</ColumnCaption>
            {sharedByYouNotAccepted.length !== 0 ? (
              <ColumnBody
                content={sharedByYouNotAccepted.map((access) => {
                  return <AccessItem key={access._id} access={access} />;
                })}
              />
            ) : (
              <EmptyColumn text="No accesses" />
            )}
          </TableColumn>
          <TableColumn>
            <ColumnCaption hint="accepted">Shared to you</ColumnCaption>
            {sharedToYouAccepted.length !== 0 ? (
              <ColumnBody
                content={sharedToYouAccepted.map((access) => {
                  return <AccessItem key={access._id} access={access} />;
                })}
              />
            ) : (
              <EmptyColumn text="No accesses" />
            )}
          </TableColumn>
          <TableColumn>
            <ColumnCaption hint="not accepted">Shared to you</ColumnCaption>
            {sharedToYouNotAccepted.length !== 0 ? (
              <ColumnBody
                content={sharedToYouNotAccepted.map((access) => {
                  return <AccessItem key={access._id} access={access} />;
                })}
              />
            ) : (
              <EmptyColumn text="No accesses" />
            )}
          </TableColumn>
        </Table>
      ) : (
        <div className="flex w-max items-center rounded-md border border-stone-300 bg-stone-50 p-1.5 pr-2.5 text-sm text-stone-700 shadow-sm dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300">
          <SpinLoader className="mr-1.5 h-4.5 w-4.5" />
          <div>Loading accesses...</div>
        </div>
      )}
    </div>
  );
}

export default ControlManager;
