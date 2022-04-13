import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getLoggedInStatus } from '../../store/auth/auth.selectors';

function PrivateElement({ children }) {
  const isLoggedIn = useSelector(getLoggedInStatus());

  return isLoggedIn && children;
}

PrivateElement.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default PrivateElement;
