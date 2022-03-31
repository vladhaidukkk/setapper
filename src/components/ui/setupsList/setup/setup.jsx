import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { parserUtil } from 'utils/core';
import { MatchSpan } from 'components/common/search';
import { truncateOnIndexHelper } from 'utils/helpers';
import PropTypes from 'prop-types';

function Setup({
  id,
  title,
  description,
  tool,
  matchString,
  version,
  isDeleting,
  onCancelDeletion,
  onDelete,
  onConfirmDeletion,
}) {
  const { setupId, edit } = useParams();

  const titleComps = matchString ? parserUtil.strToJsx(title, matchString, <MatchSpan />) : title;
  const descriptionComps = matchString ? parserUtil.strToJsx(description, matchString, <MatchSpan />) : description;

  const truncatedTitle = matchString && titleComps.length > 1 ? truncateOnIndexHelper(0, titleComps, 30) : titleComps;
  const truncatedDescription =
    matchString && descriptionComps.length > 1 ? truncateOnIndexHelper(0, descriptionComps, 45) : descriptionComps;

  return (
    <li className="mr-3.5">
      <div
        className={`block space-y-0.5 rounded-md border bg-white p-2.5 shadow-sm transition-all duration-200
        hover:scale-[97%] hover:shadow-md dark:bg-stone-800 ${
          isDeleting ? 'border-rose-600 dark:border-rose-500' : 'border-stone-300 dark:border-stone-700'
        }`}
      >
        <p className="text-xs text-stone-600 dark:text-stone-400">version: {version}</p>
        <h4 className="text-md truncate font-medium text-black dark:text-white">{truncatedTitle}</h4>
        <p className="text-stone-800 line-clamp-2 dark:text-stone-200">{truncatedDescription}</p>
        <div className="flex items-center space-x-2.5 pt-1">
          <NavLink
            to={`/builder/${tool}/${id}`}
            className={`flex flex-1 justify-center rounded-md border px-2 py-1 text-xs outline-none
            transition-colors duration-200 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white focus:border-indigo-600
            focus:bg-indigo-500 focus:text-white dark:hover:border-indigo-500 dark:hover:bg-indigo-600 dark:hover:text-white dark:focus:border-indigo-500
            dark:focus:bg-indigo-600 dark:focus:text-white ${
              setupId === id && !edit
                ? 'border-indigo-600 bg-indigo-500 text-white dark:border-indigo-500 dark:bg-indigo-600'
                : 'border-stone-300 bg-stone-100 text-stone-600 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400'
            }`}
          >
            View
          </NavLink>
          <NavLink
            to={`/builder/${tool}/${id}/edit`}
            className={`flex flex-1 justify-center rounded-md border px-2 py-1 text-xs outline-none
            transition-colors duration-200 hover:border-violet-600 hover:bg-violet-500 hover:text-white focus:border-violet-600
            focus:bg-violet-500 focus:text-white dark:hover:border-violet-500 dark:hover:bg-violet-600 dark:hover:text-white dark:focus:border-violet-500
            dark:focus:bg-violet-600 dark:focus:text-white ${
              setupId === id && edit === 'edit'
                ? 'border-violet-600 bg-violet-500 text-white dark:border-violet-500 dark:bg-violet-600'
                : 'border-stone-300 bg-stone-100 text-stone-600 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400'
            }`}
          >
            Edit
          </NavLink>
          <button
            type="button"
            onClick={() => onDelete(id)}
            className="flex flex-1 justify-center rounded-md border border-stone-300 bg-stone-100 px-2 py-1
            text-xs text-stone-600 outline-none transition-colors duration-200 hover:border-rose-600
            hover:bg-rose-500 hover:text-white focus:border-rose-600 focus:bg-rose-500 focus:text-white dark:border-stone-700 dark:bg-stone-900
            dark:text-stone-400 dark:hover:border-rose-500 dark:hover:bg-rose-600 dark:hover:text-white dark:focus:border-rose-500
            dark:focus:bg-rose-600 dark:focus:text-white"
          >
            Delete
          </button>
        </div>
        <div className={`space-y-1 pt-1.5 ${isDeleting ? 'block' : 'hidden'}`}>
          <p className="text-xs text-stone-600 dark:text-stone-400">Confirm deletion:</p>
          <div className="flex items-center space-x-2.5">
            <button
              type="button"
              onClick={onConfirmDeletion}
              className="flex flex-1 justify-center rounded-md border border-stone-300 bg-stone-100 px-2 py-1
            text-xs text-stone-600 outline-none transition-colors duration-200 hover:border-rose-600
            hover:bg-rose-500 hover:text-white focus:border-rose-600 focus:bg-rose-500 focus:text-white dark:border-stone-700 dark:bg-stone-900
            dark:text-stone-400 dark:hover:border-rose-500 dark:hover:bg-rose-600 dark:hover:text-white dark:focus:border-rose-500
            dark:focus:bg-rose-600 dark:focus:text-white"
            >
              Confirm
            </button>
            <button
              type="button"
              onClick={onCancelDeletion}
              className="flex flex-1 justify-center rounded-md border border-stone-300 bg-stone-100 px-2 py-1
            text-xs text-stone-600 outline-none transition-colors duration-200 hover:border-emerald-600
            hover:bg-emerald-500 hover:text-white focus:border-emerald-600 focus:bg-emerald-500 focus:text-white dark:border-stone-700 dark:bg-stone-900
            dark:text-stone-400 dark:hover:border-emerald-500 dark:hover:bg-emerald-600 dark:hover:text-white dark:focus:border-emerald-500
            dark:focus:bg-emerald-600 dark:focus:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

Setup.defaultProps = {
  version: '1.0.0',
};

Setup.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tool: PropTypes.string.isRequired,
  version: PropTypes.string,
  isDeleting: PropTypes.bool.isRequired,
  matchString: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCancelDeletion: PropTypes.func.isRequired,
  onConfirmDeletion: PropTypes.func.isRequired,
};

export default Setup;
