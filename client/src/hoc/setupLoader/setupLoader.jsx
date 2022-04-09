import React from 'react';
import { SpinLoader } from 'components/common/loaders';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getSetupById, getSetupsLoadingStatus } from 'store/setups/setups.selectors';
import { useParams } from 'react-router-dom';

function SetupLoader({ children }) {
  const { setupId } = useParams();
  const isSetupsLoading = useSelector(getSetupsLoadingStatus());
  const setup = useSelector(getSetupById(setupId));

  return !isSetupsLoading && setup ? (
    children
  ) : (
    <div className="p-2.5">
      <div className="flex w-max items-center rounded-md border border-stone-300 bg-stone-50 p-1.5 pr-2.5 text-sm text-stone-700 shadow-sm dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300">
        <SpinLoader className="mr-1.5 h-4.5 w-4.5" />
        <div>Loading setup...</div>
      </div>
    </div>
  );
}

SetupLoader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default SetupLoader;
