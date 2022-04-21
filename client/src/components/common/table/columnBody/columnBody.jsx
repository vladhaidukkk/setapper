import React from 'react';
import PropTypes from 'prop-types';

function ColumnBody({ content }) {
  return <div className="flex flex-col space-y-2.5 p-2.5">{content}</div>;
}

ColumnBody.propTypes = {
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default ColumnBody;
