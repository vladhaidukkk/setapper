import React, { useState } from 'react';
import { ModalContext } from 'contexts';
import PropTypes from 'prop-types';
import Modal from 'components/common/modal';

function ModalProvider({ children }) {
  const [isOpened, setOpened] = useState(false);
  const [content, setContent] = useState(null);

  const open = (modalContent) => {
    setContent(() => modalContent);
    setOpened(() => true);
  };

  const close = () => {
    setOpened(() => false);
    setContent(() => null);
  };

  return (
    <ModalContext.Provider value={{ isOpened, open, close }}>
      {children}
      <Modal isOpened={isOpened} onClose={close}>
        {content}
      </Modal>
    </ModalContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default ModalProvider;
