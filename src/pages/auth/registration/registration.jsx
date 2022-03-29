import React from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'store/auth/auth.actions';
import AuthForm, { AuthTextField } from 'components/ui/authForm';

function Registration() {
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    console.log(data);
    dispatch(signUp(data));
  };

  return (
    <div className="mt-6 flex items-center justify-center py-12 px-4 sm:px-6 md:mt-10 lg:px-8">
      <AuthForm
        btnText="Sign up"
        onSubmit={handleSubmit}
        label="Create an account"
        alt={{ text: 'log in if you already have', link: '/auth/login' }}
      >
        <AuthTextField
          label="Username"
          name="username"
          validation={{
            required: 'Username is required',
          }}
        />
        <AuthTextField
          label="Email address"
          name="email"
          validation={{
            required: 'Email address is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Email address is not correct',
            },
          }}
        />
        <AuthTextField
          label="Password"
          type="password"
          name="password"
          validation={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must have at least 8 characters',
            },
            maxLength: {
              value: 20,
              message: "Password can't have more than 20 characters",
            },
            pattern: {
              value: /\d/,
              message: 'Password must have at least 1 digit',
            },
          }}
        />
      </AuthForm>
    </div>
  );
}

export default Registration;
