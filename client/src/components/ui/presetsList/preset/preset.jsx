import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { parserUtil } from '../../../../utils/core';
import { MatchSpan } from '../../../common/search';
import { truncateOnIndexHelper } from '../../../../utils/helpers';

function Preset({ _id, title, description, tool, matchString, version }) {
  const { presetId } = useParams();

  const titleComps = matchString ? parserUtil.strToJsx(title, matchString, <MatchSpan />) : title;
  const descriptionComps = matchString ? parserUtil.strToJsx(description, matchString, <MatchSpan />) : description;

  const truncatedTitle = matchString && titleComps.length > 1 ? truncateOnIndexHelper(0, titleComps, 30) : titleComps;
  const truncatedDescription =
    matchString && descriptionComps.length > 1 ? truncateOnIndexHelper(0, descriptionComps, 45) : descriptionComps;

  return (
    <li className="mr-3.5">
      <div
        className={`block space-y-0.5 rounded-md border border-stone-300 bg-white p-2.5 shadow-sm transition-all duration-200 hover:scale-[97%]
        hover:shadow-md dark:border-stone-700 dark:bg-stone-800`}
      >
        <p className="text-xs text-stone-600 dark:text-stone-400">version: {version}</p>
        <h4 className="text-md truncate font-medium text-black dark:text-white">{truncatedTitle}</h4>
        <p className="text-stone-800 line-clamp-2 dark:text-stone-200">{truncatedDescription}</p>
        <div className="flex items-center space-x-2.5 pt-1">
          <NavLink
            to={`/presets/${tool}/${_id}`}
            className={`flex flex-1 justify-center rounded-md border px-2 py-1 text-xs outline-none
            transition-colors duration-200 hover:border-indigo-600 hover:bg-indigo-500 hover:text-white focus:border-indigo-600
            focus:bg-indigo-500 focus:text-white dark:hover:border-indigo-500 dark:hover:bg-indigo-600 dark:hover:text-white dark:focus:border-indigo-500
            dark:focus:bg-indigo-600 dark:focus:text-white ${
              presetId === _id
                ? 'border-indigo-600 bg-indigo-500 text-white dark:border-indigo-500 dark:bg-indigo-600'
                : 'border-stone-300 bg-stone-100 text-stone-600 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400'
            }`}
          >
            View
          </NavLink>
        </div>
      </div>
    </li>
  );
}

Preset.defaultProps = {
  version: '1.0.0',
};

Preset.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tool: PropTypes.string.isRequired,
  version: PropTypes.string,
  matchString: PropTypes.string.isRequired,
};

export default Preset;
