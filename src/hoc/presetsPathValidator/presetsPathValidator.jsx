import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toolConstants } from 'utils/constants';
import { getPresetById, getPresetsLoadingStatus } from 'store/presets/presets.selectors';

function PresetsPathValidator({ children }) {
  const { tool, presetId } = useParams();
  const isPresetsLoading = useSelector(getPresetsLoadingStatus());
  const preset = useSelector(getPresetById(presetId));
  const navigate = useNavigate();

  const isToolValid = tool && toolConstants.LIST.find((item) => item.value === tool);

  useEffect(() => {
    if (tool) {
      if (!isToolValid) {
        navigate(`/presets`, { replace: true });
      } else if (presetId && !preset && !isPresetsLoading) {
        navigate(`/presets/${tool}`, { replace: true });
      }
    }
  }, [tool, presetId, isPresetsLoading]);

  return isToolValid ? children : null;
}

PresetsPathValidator.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default PresetsPathValidator;
