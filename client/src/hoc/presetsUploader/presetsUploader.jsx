import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { loadPresets } from 'store/presets/presets.actions';

function PresetsUploader({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPresets());
  }, []);

  return children;
}

PresetsUploader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default PresetsUploader;
