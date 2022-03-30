import React from 'react';
import { NavLink } from 'react-router-dom';
import { parserUtil } from 'utils/core';
import { MatchSpan } from 'components/common/search';
import { truncateOnIndexHelper } from 'utils/helpers';
import PropTypes from 'prop-types';
import moment from 'moment';

function Setup({ id, title, description, createdAt, modifiedAt, tool, matchString }) {
  const titleComps = matchString ? parserUtil.strToJsx(title, matchString, <MatchSpan />) : title;
  const descriptionComps = matchString ? parserUtil.strToJsx(description, matchString, <MatchSpan />) : description;

  const truncatedTitle = matchString && titleComps.length > 1 ? truncateOnIndexHelper(0, titleComps, 30) : titleComps;
  const truncatedDescription =
    matchString && descriptionComps.length > 1 ? truncateOnIndexHelper(0, descriptionComps, 45) : descriptionComps;

  return (
    <li className="mr-3.5 rounded-md border border-stone-300 bg-white p-2.5 shadow-sm dark:border-stone-700 dark:bg-stone-800">
      <NavLink className={() => `space-y-1`} to={`/builder/${tool}/${id}`}>
        <h4 className="text-md font-medium text-black dark:text-white">{truncatedTitle}</h4>
        <p className="text-stone-700 dark:text-stone-300">{truncatedDescription}</p>
        <div className="flex items-center space-x-2.5">
          <span className="rounded-md border border-stone-300 bg-stone-100 px-2 py-1 text-sm text-stone-700 dark:border-stone-700">
            {moment(createdAt).format('MMM Do YY')}
          </span>
          <span className="rounded-md border border-stone-300 bg-stone-100 px-2 py-1 text-sm text-stone-700 dark:border-stone-700">
            {moment(modifiedAt).format('MMM Do YY')}
          </span>
        </div>
      </NavLink>
    </li>
  );
}

Setup.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tool: PropTypes.string.isRequired,
  matchString: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  modifiedAt: PropTypes.number.isRequired,
};

export default Setup;
