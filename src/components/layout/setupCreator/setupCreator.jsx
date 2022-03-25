import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { capitalize } from 'lodash';
// import { useDispatch, useSelector } from 'react-redux';
// import { createSetup } from 'store/setups/setups.actions';
// import { getAccountId } from 'store/auth/auth.selectors';
import { builderConstants } from 'utils/constants';
import { parserUtil, builderUtil } from 'utils/core';

const getDefaults = () => ({
  defaultValues: {
    title: '',
    description: '',
    options: Object.keys(builderConstants.webpack.OPTIONS).reduce((acc, optionKey) => {
      const option = builderConstants.webpack.OPTIONS[optionKey];
      acc[optionKey] = option.defValue;

      return acc;
    }, {}),
  },
});

function SetupCreator() {
  // const dispatch = useDispatch();
  const { handleSubmit, register, watch, getValues } = useForm(getDefaults()); // here put all options
  // const [options, setAppEnv] = useState({ 'webpack.config.js': '' });
  const { tool } = useParams();
  const linkRef = useRef();

  // useEffect(() => {
  //   // builderUtil.webpack(watch('options'));
  // }, [watch()]);

  // const accountId = useSelector(getAccountId());
  /*
   * title, description, ownerId, createdAt, modifiedAt, id, tool
   * options: {
   *    folders: {
   *      src: {
   *        files: {
   *          'index.js': 'content'
   *        }
   *      }
   *    },
   *    files: {
   *      'package.json': 'all content',
   *      'webpack.config.js': 'all content',
   *    }
   * }
   * */

  const handleFormSubmit = (data) => {
    // const dataKeys = Object.keys(data);
    // const finalData = dataKeys.reduce((acc, key) => {
    //   if (builderConstants.webpack[key]) {
    //     acc[key] = data[key] || builderConstants.webpack[key];
    //   } else {
    //     acc[key] = data[key];
    //   }
    //
    //   return acc;
    // }, {});
    // const toolConstants = builderConstants[tool];
    // data.entry = data.entry || toolConstants.entry.def;
    // data.output.path = data.output.path || toolConstants.output.path.def;
    // data.output.filename = data.output.filename || toolConstants.output.filename.def;
    console.log(data);
    // dispatch(createSetup({ ...data, tool, ownerId: accountId }));
  };

  return (
    <div className="space-y-2.5 p-2.5">
      <h1 className="text-2xl font-bold text-zinc-50">New {capitalize(tool)} setup</h1>
      <div className="flex gap-x-4">
        <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col space-y-2">
          <input className="rounded border p-1 shadow" type="text" {...register('title')} placeholder="Title" />
          <textarea
            className="rounded border p-1 shadow"
            {...register('description')}
            cols="30"
            rows="5"
            placeholder="Description"
          />
          {Object.keys(builderConstants.webpack.OPTIONS).map((optionKey) => {
            const option = builderConstants.webpack.OPTIONS[optionKey];
            const dataType = typeof option.defValue;

            return (
              <label htmlFor={optionKey} key={optionKey}>
                <div className="text-zinc-50">{capitalize(optionKey)}</div>
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
                    placeholder={option.defValue}
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
          <pre>{parserUtil.formatJsonStr(JSON.stringify(watch()))}</pre>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="rounded border bg-zinc-50 p-2 shadow">
            <pre>{parserUtil.formatJsStr(builderUtil.webpack(watch('options')))}</pre>
          </div>
          <a
            ref={linkRef}
            className="hidden"
            href={`data:text/javascript;charset=utf-8,${encodeURIComponent(
              parserUtil.formatJsStr(builderUtil.webpack(getValues('options')))
            )}`}
            download="webpack.config.js"
          >
            $nbsp;
          </a>
          <button
            className="rounded bg-sky-300 py-1 shadow"
            type="button"
            onClick={() => {
              // const webpackConfigJsContent = builderUtil.webpack(getValues('options'));
              // const webpackConfigJs = new File([webpackConfigJsContent], 'webpack.config.js');
              // console.log(webpackConfigJsContent);
              // console.log(webpackConfigJs);
              // console.log('download');
              linkRef.current.click();
            }}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetupCreator;
