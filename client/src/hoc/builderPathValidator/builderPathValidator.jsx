import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toolConstants } from '../../utils/constants';
import { getSetupById, getSetupsLoadingStatus } from '../../store/setups/setups.selectors';
import { getAccountId } from '../../store/auth/auth.selectors';

function BuilderPathValidator({ children }) {
  const { tool, setupId, edit } = useParams();
  const isSetupsLoading = useSelector(getSetupsLoadingStatus());
  const setup = useSelector(getSetupById(setupId));
  const accountId = useSelector(getAccountId());
  const navigate = useNavigate();

  const isToolValid = tool && toolConstants.LIST.find((item) => item.value === tool);

  useEffect(() => {
    if (tool) {
      if (!isToolValid) {
        navigate(`/builder`, { replace: true });
      } else if (setupId && !setup && !isSetupsLoading) {
        navigate(`/builder/${tool}`, { replace: true });
      } else if (setup && !isSetupsLoading && edit && edit !== 'edit') {
        navigate(`/builder/${tool}/${setupId}`, { replace: true });
      } else if (setup && !isSetupsLoading && edit && edit === 'edit' && setup.ownerId !== accountId) {
        navigate(`/builder/${tool}/${setupId}`, { replace: true });
      }
    }
  }, [tool, setupId, isSetupsLoading]);

  return isToolValid ? children : null;
}

BuilderPathValidator.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default BuilderPathValidator;
