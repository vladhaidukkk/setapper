import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../store/auth/auth.actions';
import AuthForm, { AuthTextField } from '../../../components/ui/authForm';

function Login() {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleSubmit = (data) => {
    dispatch(logIn(data, location));
  };

  return (
    <div className="mt-6 flex items-center justify-center py-12 px-4 sm:px-6 md:mt-10 lg:px-8">
      <AuthForm
        btnText="Log in"
        onSubmit={handleSubmit}
        label="Log in to your account"
        alt={{ text: 'register one to start', link: '/auth/registration' }}
      >
        <AuthTextField
          label="Email address"
          name="email"
          autoComplete="email"
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
          autoComplete="current-password"
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

export default Login;
