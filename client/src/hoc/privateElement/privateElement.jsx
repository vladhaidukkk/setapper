import { useSelector } from 'react-redux';
import { getLoggedInStatus } from 'store/auth/auth.selectors';
import PropTypes from 'prop-types';

function PrivateElement({ children }) {
  const isLoggedIn = useSelector(getLoggedInStatus());

  return isLoggedIn && children;
}

PrivateElement.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default PrivateElement;
