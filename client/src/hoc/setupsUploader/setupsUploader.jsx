import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserSetups } from 'store/setups/setups.actions';
import { getAccountId } from 'store/auth/auth.selectors';
import PropTypes from 'prop-types';

function SetupsUploader({ children }) {
  const dispatch = useDispatch();
  const accountId = useSelector(getAccountId());

  useEffect(() => {
    if (accountId) {
      dispatch(loadUserSetups(accountId));
    }
  }, [accountId]);

  return children;
}

SetupsUploader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default SetupsUploader;
