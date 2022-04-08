import React from 'react';
import PropTypes from 'prop-types';

function ModalTitle({ children }) {
  return <h4 className="text-center text-2xl font-medium text-black dark:text-white">{children}</h4>;
}

ModalTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalTitle;
