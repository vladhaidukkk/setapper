import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountId } from '../../store/auth/auth.selectors';
import { loadAccountSetups } from '../../store/setups/setups.actions';
import { loadAccountAccesses } from '../../store/accesses/accesses.actions';
import { loadAccountLikes } from '../../store/likes/likes.actions';

function AccountDataUploader({ children }) {
  const dispatch = useDispatch();
  const accountId = useSelector(getAccountId());

  useEffect(() => {
    if (accountId) {
      dispatch(loadAccountSetups(accountId));
      dispatch(loadAccountAccesses());
      dispatch(loadAccountLikes());
    }
  }, [accountId]);

  return children;
}
AccountDataUploader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default AccountDataUploader;
