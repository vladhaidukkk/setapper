import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Setup from './setup/setup';
import SetupsHint from './setupsHint/setupsHint';
import { removeSetup } from '../../../store/setups/setups.actions';

function SetupsList({ list, matchString, notFound }) {
  const dispatch = useDispatch();
  const { tool, setupId, edit } = useParams();
  const { pathname } = useLocation();
  const [deletionSetupId, setDeletionSetupId] = useState(null);

  useEffect(() => {
    if (deletionSetupId) {
      setDeletionSetupId(() => null);
    }
  }, [setupId, edit]);

  const handleDeleteSetup = (id) => {
    setDeletionSetupId(() => id);
  };

  const handleCancelDeletion = () => {
    setDeletionSetupId(() => null);
  };

  const handleConfirmDeletion = () => {
    const redirectPath = setupId === deletionSetupId ? `/builder/${tool}` : pathname;
    dispatch(removeSetup(deletionSetupId, redirectPath));
    setDeletionSetupId(() => null);
  };

  const renderHint = () => {
    if (!tool) {
      return null;
    }
    if (notFound) {
      return <SetupsHint text="No setups found" />;
    }
    return <SetupsHint text="No setups for this tool" />;
  };

  return (
    <div className="flex grow flex-col overflow-y-auto">
      {list && list.length !== 0 ? (
        <ul className="flex grow flex-col space-y-2 overflow-y-auto">
          {list.map((item) => {
            console.log(item, deletionSetupId);
            return (
              <Setup
                key={item._id}
                {...item}
                matchString={matchString}
                isDeleting={deletionSetupId === item._id}
                onDelete={handleDeleteSetup}
                onCancelDeletion={handleCancelDeletion}
                onConfirmDeletion={handleConfirmDeletion}
              />
            );
          })}
        </ul>
      ) : (
        renderHint()
      )}
    </div>
  );
}

SetupsList.defaultProps = {
  list: undefined,
  notFound: false,
};

SetupsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  matchString: PropTypes.string.isRequired,
  notFound: PropTypes.bool,
};

export default SetupsList;
