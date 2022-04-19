import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedInStatus } from '../../store/auth/auth.selectors';
import { loadUsers } from '../../store/users/users.actions';

function DataUploader({ children }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getLoggedInStatus());

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(loadUsers());
    }
  }, [isLoggedIn]);

  return children;
}
DataUploader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default DataUploader;
