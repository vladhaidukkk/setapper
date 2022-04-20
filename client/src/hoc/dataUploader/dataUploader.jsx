import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { loadUsers } from '../../store/users/users.actions';
import { loadPresets } from '../../store/presets/presets.actions';

function DataUploader({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadPresets());
  }, []);

  return children;
}
DataUploader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default DataUploader;
