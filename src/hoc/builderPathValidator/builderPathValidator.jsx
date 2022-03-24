import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import { sectionConstants } from 'utils/constants';

function BuilderPathValidator({ children }) {
  const { section } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (section) {
      const isCorrect = sectionConstants.LIST.find((item) => item.name === section);
      if (!isCorrect) navigate(`/builder/${sectionConstants.DOC_NAME}`, { replace: true });
    }
  }, [section]);

  return children;
}

BuilderPathValidator.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default BuilderPathValidator;
