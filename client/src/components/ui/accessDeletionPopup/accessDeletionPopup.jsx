import React from 'react';
import PropTypes from 'prop-types';
import { ModalBtn, ModalSubtitle, ModalTitle } from '../../common/modal';

function AccessDeletionPopup({ onConfirm, onCancel }) {
  return (
    <>
      <ModalTitle>Confirm access deletion</ModalTitle>
      <ModalSubtitle>Are you sure you want to delete this access?</ModalSubtitle>
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

AccessDeletionPopup.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default AccessDeletionPopup;
