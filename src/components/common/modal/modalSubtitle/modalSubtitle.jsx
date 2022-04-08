import React from 'react';
import PropTypes from 'prop-types';

function ModalSubtitle({ children }) {
  return <h5 className="mb-2.5 text-center text-lg font-normal text-stone-800 dark:text-stone-200">{children}</h5>;
}

ModalSubtitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalSubtitle;
