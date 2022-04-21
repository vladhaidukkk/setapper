import React from 'react';
import PropTypes from 'prop-types';
import { XIcon } from '@heroicons/react/solid';

function Modal({ isOpened, onClose, children }) {
  const handleModalWindowClick = (event) => {
    event.stopPropagation();
  };

  return isOpened ? (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center border-none bg-white/50 outline-none backdrop-blur-lg dark:bg-black/50"
      onClick={onClose}
    >
      <div
        onClick={handleModalWindowClick}
        className="relative w-96 -translate-y-20 rounded-md border border-stone-300 bg-white p-5 shadow-sm outline-none dark:border-stone-700 dark:bg-stone-800"
      >
        <div>
          <button
            type="button"
            onClick={onClose}
            className="absolute top-2.5 right-2.5 text-stone-800 outline-none transition-colors duration-200 hover:text-rose-600 focus:text-rose-600 dark:text-stone-200 dark:hover:text-rose-500 dark:focus:text-rose-500"
          >
            <XIcon className="h-4 w-4" />
          </button>
        </div>
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
