import React from 'react';
import PropTypes from 'prop-types';

function MatchSpan({ children }) {
  return <span className="bg-violet-500 bg-opacity-25 dark:bg-opacity-75">{children}</span>;
}

MatchSpan.defaultProps = {
  children: null,
};

MatchSpan.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default MatchSpan;
