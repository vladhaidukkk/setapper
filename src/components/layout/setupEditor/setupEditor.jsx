import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSetupById, getSetupsLoadingStatus } from 'store/setups/setups.selectors';
import { builderUtil, parserUtil } from 'utils/core';
import { removeSetup } from 'store/setups/setups.actions';

function SetupEditor() {
  const { tool, setupId } = useParams();
  const isSetupsLoading = useSelector(getSetupsLoadingStatus());
  const setup = useSelector(getSetupById(setupId));
  const linkRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(removeSetup(setupId));
    navigate(`/builder/${tool}`, { replace: true });
  };

  return !isSetupsLoading && setup ? (
    <div className="flex-1 space-y-2 p-2.5">
      <h2 className="text-4xl font-medium text-zinc-50">{setup.title}</h2>
      <p className="text-lg text-zinc-100">
        <span className="text-zinc-400">Description:</span> {setup.description}
      </p>
      <div className="flex gap-x-4">
        <div>
          <h3 className="mb-1 text-base text-zinc-200">Options</h3>
          <div className="rounded border bg-zinc-50 p-2 shadow">
            <pre>{parserUtil.formatJsonStr(JSON.stringify(setup.options))}</pre>
          </div>
        </div>
        <div>
          <h3 className="mb-1 text-base text-zinc-200">webpack.config.js</h3>
          <div className="flex flex-col space-y-3">
            <div className="rounded border bg-zinc-50 p-2 shadow">
              <pre>{parserUtil.formatJsStr(builderUtil.webpack(setup.options))}</pre>
            </div>
            <a
              ref={linkRef}
              className="hidden"
              href={`data:text/javascript;charset=utf-8,${encodeURIComponent(
                parserUtil.formatJsStr(builderUtil.webpack(setup.options))
              )}`}
              download="webpack.config.js"
            >
              $nbsp;
            </a>
            <button
              className="rounded bg-sky-300 py-1 shadow"
              type="button"
              onClick={() => {
                linkRef.current.click();
              }}
            >
              Download
            </button>
          </div>
        </div>
        <div className="pt-7">
          <button
            type="button"
            className="flex items-center justify-center rounded bg-red-400 px-1.5 shadow"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div>loading</div>
  );
}

export default SetupEditor;
