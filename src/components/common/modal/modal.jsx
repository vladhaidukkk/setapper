import React from 'react';
import PropTypes from 'prop-types';

function Modal({ isOpened, onClose, children }) {
  const handleModalWindowClick = (event) => {
    event.stopPropagation();
  };

  return isOpened ? (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center border-none bg-white/50 outline-none backdrop-blur-md dark:bg-black/50"
      onClick={onClose}
    >
      <div
        onClick={handleModalWindowClick}
        className="w-96 -translate-y-20 rounded-md border border-stone-300 bg-white p-5 shadow-sm outline-none dark:border-stone-700 dark:bg-stone-800"
      >
        {children}
      </div>
    </div>
  ) : null;
}

Modal.defaultProps = {
  children: null,
};

Modal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

export default Modal;
