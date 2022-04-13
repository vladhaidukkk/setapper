import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { loadAccountSetups } from '../../store/setups/setups.actions';
import { getAccountId } from '../../store/auth/auth.selectors';

function SetupsUploader({ children }) {
  const dispatch = useDispatch();
  const accountId = useSelector(getAccountId());

  useEffect(() => {
    if (accountId) {
      dispatch(loadAccountSetups(accountId));
    }
  }, [accountId]);

  return children;
}

SetupsUploader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default SetupsUploader;
