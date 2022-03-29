import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { capitalize } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { createSetup } from 'store/setups/setups.actions';
import { getAccountId } from 'store/auth/auth.selectors';
import { builderConstants } from 'utils/constants';
import { parserUtil, builderUtil } from 'utils/core';
import DownloadBtn from 'components/common/downloadBtn';

const getDefaults = () => ({
  defaultValues: {
    title: '',
    description: '',
    options: Object.keys(builderConstants.webpack.OPTIONS).reduce((acc, optionKey) => {
      const option = builderConstants.webpack.OPTIONS[optionKey];
      acc[optionKey] = option.defaultValue;

      return acc;
    }, {}),
  },
});

function SetupCreator() {
  const dispatch = useDispatch();
  const { handleSubmit, register, watch, getValues } = useForm(getDefaults()); // here put all toolsIntro
  const { tool } = useParams();
  const accountId = useSelector(getAccountId());

  const handleFormSubmit = (data) => {
    dispatch(createSetup({ ...data, tool, ownerId: accountId }));
  };

  return (
    <div className="space-y-2.5 p-2.5">
      <h1 className="text-2xl font-bold text-zinc-50">New {capitalize(tool)} setup</h1>
      <div className="flex gap-x-4 text-zinc-800">
        <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col space-y-2">
          <input className="rounded border p-1 shadow" type="text" {...register('title')} placeholder="Title" />
          <textarea
            className="rounded border p-1 shadow"
            {...register('description')}
            cols="30"
            rows="5"
            placeholder="Description"
          />
          {Object.keys(builderConstants[tool].OPTIONS).map((optionKey) => {
            const option = builderConstants[tool].OPTIONS[optionKey];
            const dataType = typeof option.defaultValue;

            return (
              <label htmlFor={optionKey} key={optionKey}>
                <h4 className="text-zinc-100">{option.label}</h4>
                <p>{option.description}</p>
                {dataType === 'boolean' ? (
                  <input
                    id={optionKey}
                    className="rounded border p-1 shadow"
                    type="checkbox"
                    {...register(`options.${optionKey}`)}
                  />
                ) : (
                  <input
                    id={optionKey}
                    className="rounded border p-1 shadow"
                    type="text"
                    {...register(`options.${optionKey}`)}
                    placeholder={option.defaultValue}
                  />
                )}
              </label>
            );
          })}
          <button className="rounded bg-sky-300 py-1 shadow" type="submit">
            Create setup
          </button>
        </form>
        <div className="rounded border bg-zinc-50 p-2 shadow">
          <pre>{parserUtil.formatJsonToStr(watch())}</pre>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="rounded border bg-zinc-50 shadow">
            <pre>{parserUtil.formatJsStr(builderUtil[tool](watch('options')))}</pre>
          </div>
          <DownloadBtn
            filename={builderConstants[tool].filenames.CONFIG}
            content={parserUtil.formatJsStr(builderUtil[tool](getValues('options')))}
            contentType="text/javascript"
          />
        </div>
      </div>
    </div>
  );
}

export default SetupCreator;
