import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import { toolConstants } from 'utils/constants';
import { useSelector } from 'react-redux';
import { getSetupById, getSetupsLoadingStatus } from 'store/setups/setups.selectors';

function BuilderPathValidator({ children }) {
  const { tool, setupId } = useParams();
  const isSetupsLoading = useSelector(getSetupsLoadingStatus());
  const setup = useSelector(getSetupById(setupId));
  const navigate = useNavigate();

  useEffect(() => {
    if (tool) {
      const isSectionValid = toolConstants.LIST.find((item) => item.name === tool);

      if (!isSectionValid) {
        navigate(`/builder/inspector`, { replace: true });
      } else if (setupId && !setup && !isSetupsLoading) {
        navigate(`/builder/${tool}`, { replace: true });
      }
    }
  }, [tool, setupId, isSetupsLoading]);

  return children;
}

BuilderPathValidator.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default BuilderPathValidator;
