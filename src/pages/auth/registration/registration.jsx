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
      <form className="bg-slate-300 rounded m-4 w-max p-2 space-y-1" onSubmit={handleSubmit(handleFormSubmit)}>
        <h1>Register</h1>
        <input type="text" {...register('email')} />
        <br />
        <input type="text" {...register('password')} />
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
