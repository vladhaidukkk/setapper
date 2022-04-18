import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Form, { ImageField, SubmitBtn, TextareaField, TextField } from '../../../components/common/form';
import { getAccountData } from '../../../store/account/account.selectors';
import { updateAccount } from '../../../store/account/account.actions';
import { storageService } from '../../../services';

function Profile() {
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const accountData = useSelector(getAccountData());
  const dispatch = useDispatch();

  useEffect(() => {
    reset({
      email: accountData?.email,
      username: accountData?.username,
      country: accountData?.country,
      bio: accountData?.bio,
    });
  }, [accountData]);

  const handleFormSubmit = async (data) => {
    const avatarLink = !data.avatarLink ? accountData.avatarLink : await storageService.uploadAvatar(data.avatarLink);
    const newData = {
      ...data,
      avatarLink,
    };

    dispatch(updateAccount(newData));
  };

  return (
    <div className="space-y-2.5">
      <h3 className="text-2xl font-medium text-black dark:text-white">Profile Settings</h3>
      <Form onSubmit={handleSubmit(handleFormSubmit)} register={register}>
        <ImageField
          name="avatarLink"
          label="Avatar image"
          set={setValue}
          defaultImg={accountData?.avatarLink}
          btnText="Change avatar"
        />
        <TextField
          name="username"
          label="Username"
          error={errors.username}
          validation={{
            required: 'Username is required',
          }}
          placeholder="Change username..."
        />
        <TextField
          name="email"
          label="Email address"
          error={errors.email}
          validation={{
            required: 'Email address is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Email address is not correct',
            },
          }}
          placeholder="Change email address..."
        />
        <TextField name="country" label="Country" placeholder="Add country..." />
        <TextareaField label="Bio" name="bio" placeholder="Add bio..." />
        <SubmitBtn>Save changes</SubmitBtn>
      </Form>
    </div>
  );
}

export default Profile;
