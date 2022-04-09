import React from 'react';
import { ModalBtn, ModalSubtitle, ModalTitle } from 'components/common/modal';
import PropTypes from 'prop-types';

function ConfirmDeletionPopup({ onConfirm, onCancel }) {
  return (
    <>
      <ModalTitle>Confirm setup deletion</ModalTitle>
      <ModalSubtitle>Are you sure you want to delete this setup?</ModalSubtitle>
      <div className="flex items-center space-x-2.5">
        <ModalBtn onClick={onConfirm} color="rose">
          Confirm
        </ModalBtn>
        <ModalBtn onClick={onCancel} color="emerald">
          Cancel
        </ModalBtn>
      </div>
    </>
  );
}

ConfirmDeletionPopup.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ConfirmDeletionPopup;
