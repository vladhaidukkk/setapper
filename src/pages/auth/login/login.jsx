import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from 'store/auth/auth.actions';
import { Link, useLocation } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { handleSubmit, register } = useForm();

  const handleFormSubmit = (data) => {
    dispatch(logIn(data, location));
  };

  return (
    <div>
      <form className="m-4 w-max space-y-1 rounded bg-slate-300 p-2" onSubmit={handleSubmit(handleFormSubmit)}>
        <h1>Login</h1>
        <input type="text" {...register('email')} />
        <br />
        <input type="password" {...register('password')} />
        <br />
        <button type="submit">log iin</button>
        <div>
          I&apos;m not registered: <Link to="/auth/registration">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
