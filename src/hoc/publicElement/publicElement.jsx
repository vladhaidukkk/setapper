import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getLoggedInStatus } from 'store/auth/auth.selectors';

function PublicElement({ children }) {
  const isLoggedIn = useSelector(getLoggedInStatus());

  return !isLoggedIn && children;
}

PublicElement.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default PublicElement;
