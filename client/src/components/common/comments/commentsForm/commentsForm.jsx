import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import Form, { SubmitBtn, TextareaField } from '../../form';

function CommentsForm({ fieldLabel, fieldName, onSubmit }) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)} register={register}>
      <TextareaField
        label={fieldLabel}
        name={fieldName}
        validation={{ required: `${fieldName} is required` }}
        error={errors[fieldName]}
        placeholder={`${capitalize(fieldName)}...`}
      />
      <SubmitBtn>Leave comment</SubmitBtn>
    </Form>
  );
}

CommentsForm.defaultProps = {
  fieldName: 'message',
  fieldLabel: 'Leave a comment',
};

CommentsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  fieldName: PropTypes.string,
  fieldLabel: PropTypes.string,
};

export default CommentsForm;
