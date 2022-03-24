import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signUp } from 'store/auth/auth.actions';
import { Link } from 'react-router-dom';

function Registration() {
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();

  const handleFormSubmit = (data) => {
    dispatch(signUp(data));
  };

  return (
    <div>
      <form className="m-4 w-max space-y-1 rounded bg-slate-300 p-2" onSubmit={handleSubmit(handleFormSubmit)}>
        <h1>Register</h1>
        <input type="text" {...register('username')} />
        <br />
        <input type="text" {...register('email')} />
        <br />
        <input type="password" {...register('password')} />
        <br />
        <button type="submit">register</button>
        <div>
          I&apos;m already registered: <Link to="/auth/login">Log In</Link>
        </div>
      </form>
    </div>
  );
}

export default Registration;
