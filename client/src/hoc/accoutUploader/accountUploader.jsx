import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountId, getLoggedInStatus } from 'store/auth/auth.selectors';
import { getAccountData } from 'store/account/account.selectors';
import { loadAccountById } from 'store/account/account.actions';

const AccountUploader = ({ children }) => {
  const dispatch = useDispatch();
  const accountId = useSelector(getAccountId());
  const isLoggedIn = useSelector(getLoggedInStatus());
  const accountData = useSelector(getAccountData());

  useEffect(() => {
    if (isLoggedIn && !accountData) {
      dispatch(loadAccountById(accountId));
    }
  }, []);

  return children;
};

AccountUploader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default AccountUploader;
