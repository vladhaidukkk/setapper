import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { capitalize } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { createSetup } from 'store/setups/setups.actions';
import { getAccountId } from 'store/auth/auth.selectors';

function SetupCreator() {
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
  const { tool } = useParams();
  const accountId = useSelector(getAccountId());

  const handleFormSubmit = (data) => {
    dispatch(createSetup({ ...data, tool, ownerId: accountId }));
  };

  return (
    <div className="space-y-2.5 p-2.5">
      <h1 className="text-2xl font-bold">New {capitalize(tool)} setup</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col space-y-2">
        <input className="rounded border p-1 shadow" type="text" {...register('title')} placeholder="Title" />
        <textarea
          className="rounded border p-1 shadow"
          {...register('description')}
          cols="30"
          rows="5"
          placeholder="Description"
        />
        <button className="rounded bg-sky-300 py-1 shadow" type="submit">
          Create setup
        </button>
      </form>
    </div>
  );
}

export default SetupCreator;
