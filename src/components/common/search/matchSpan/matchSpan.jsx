import React from 'react';
import PropTypes from 'prop-types';

function MatchSpan({ children }) {
  return <span className="bg-sky-400 bg-opacity-30">{children}</span>;
}

MatchSpan.defaultProps = {
  children: null,
};

MatchSpan.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default MatchSpan;
