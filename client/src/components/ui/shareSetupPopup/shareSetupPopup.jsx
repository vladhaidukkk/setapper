import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { ModalSubtitle, ModalTitle } from '../../common/modal';
import { SubmitBtn, TextField } from '../../common/form';

function ShareSetupPopup({ onSubmit }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <ModalTitle>Share your setup</ModalTitle>
      <ModalSubtitle>Enter user email to whom you want to give access to the setup</ModalSubtitle>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2.5">
        <TextField
          name="email"
          register={register}
          error={errors.email}
          validation={{
            required: 'User email is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'User email is not correct',
            },
          }}
          placeholder="User email"
        />
        <SubmitBtn>Share</SubmitBtn>
      </form>
    </>
  );
}

ShareSetupPopup.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ShareSetupPopup;
