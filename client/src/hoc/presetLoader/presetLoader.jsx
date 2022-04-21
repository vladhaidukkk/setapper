import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getPresetById, getPresetsLoadingStatus } from '../../store/presets/presets.selectors';
import { SpinLoader } from '../../components/common/loaders';

function PresetLoader({ children }) {
  const { presetId } = useParams();
  const isPresetsLoading = useSelector(getPresetsLoadingStatus());
  const setup = useSelector(getPresetById(presetId));

  return !isPresetsLoading && setup ? (
    children
  ) : (
    <div className="p-2.5">
      <div className="flex w-max items-center rounded-md border border-stone-300 bg-stone-50 p-1.5 pr-2.5 text-sm text-stone-700 shadow-sm dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300">
        <SpinLoader className="mr-1.5 h-4.5 w-4.5" />
        <div>Loading preset...</div>
      </div>
    </div>
  );
}

PresetLoader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default PresetLoader;
