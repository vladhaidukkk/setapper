import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from 'store/auth/auth.actions';
import { Link } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();

  const handleFormSubmit = (data) => {
    dispatch(logIn(data));
  };

  return (
    <div>
      <form className="bg-slate-300 rounded m-4 w-max p-2 space-y-1" onSubmit={handleSubmit(handleFormSubmit)}>
        <h1>Login</h1>
        <input type="text" {...register('email')} />
        <br />
        <input type="text" {...register('password')} />
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
