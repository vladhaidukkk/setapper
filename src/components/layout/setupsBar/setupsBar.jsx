import React, { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { capitalize, orderBy } from 'lodash';
import { useSelector } from 'react-redux';
import { getSetupsByTool, getSetupsLoadingStatus } from 'store/setups/setups.selectors';
import { hasMatchHelper, truncateOnIndexHelper } from 'utils/helpers';
import { sortConstants } from 'utils/constants';
import PropTypes from 'prop-types';
import { parserUtil } from 'utils/core';

function MatchSpan({ children }) {
  return <span className="bg-sky-400 bg-opacity-30">{children}</span>;
}

MatchSpan.defaultProps = {
  children: null,
};

MatchSpan.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

function SetupsBar() {
  const { tool } = useParams();
  const isSetupsLoading = useSelector(getSetupsLoadingStatus());
  const setups = useSelector(getSetupsByTool(tool));
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState({ iter: 'title', order: 'asc' });

  const searchedSetups = searchValue
    ? setups.filter((note) => hasMatchHelper(new RegExp(searchValue, 'i'), note, ['title', 'description']))
    : setups;
  const sortedSetups = orderBy(searchedSetups, [sortValue.iter], [sortValue.order]);

  const handleSearchChange = ({ target }) => {
    setSearchValue(() => target.value);
  };

  const handleSortChange = (newIter, newOrder) => {
    setSortValue(() => ({ iter: newIter, order: newOrder }));
  };

  return (
    <aside className="w-60 space-y-3 p-2.5">
      <div className="flex space-x-2">
        <input
          type="text"
          className="flex-1 rounded border px-1 py-0.5 shadow"
          onChange={handleSearchChange}
          value={searchValue}
          placeholder="Search..."
        />
        <Link to={`/builder/${tool}`} className="shrink-0 rounded bg-sky-300 px-2.5 py-0.5 shadow">
          +
        </Link>
      </div>
      <div className="space-y-2">
        <ul className="space-y-2 rounded bg-gray-700 p-2 text-zinc-100 shadow">
          {sortConstants.SETUPS.iterOptions.map((option) => {
            return (
              <li className="rounded bg-gray-800 px-1 py-0.5 shadow" key={option.value}>
                <button type="button" onClick={() => handleSortChange(option.value, sortValue.order)}>
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
        <ul className="space-y-2 rounded bg-gray-700 p-2 text-zinc-100 shadow">
          {sortConstants.SETUPS.orderOptions.map((option) => {
            return (
              <li className="rounded bg-gray-800 px-1 py-0.5 shadow" key={option.value}>
                <button type="button" onClick={() => handleSortChange(sortValue.iter, option.value)}>
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <h1 className="text-xl font-medium text-zinc-300">{capitalize(tool)}</h1>
      <ul className="space-y-2">
        {isSetupsLoading ? (
          <li>loading setups...</li>
        ) : (
          sortedSetups?.map((setup) => {
            // for highlighting matches
            const title = searchValue ? parserUtil.strToJsx(setup.title, searchValue, <MatchSpan />) : setup.title;
            const description = searchValue
              ? parserUtil.strToJsx(setup.description, searchValue, <MatchSpan />)
              : setup.description;

            const truncatedTitle = searchValue && title.length > 1 ? truncateOnIndexHelper(0, title, 30) : title;
            const truncatedDescription =
              searchValue && description.length > 1 ? truncateOnIndexHelper(0, description, 45) : description;
            /// end

            return (
              <li className="space-y-2 rounded bg-gray-700 p-2 text-zinc-100 shadow" key={setup.id}>
                <NavLink to={`/builder/${tool}/${setup.id}`}>
                  <h4 className="text-md border-b border-gray-800 pb-1 font-medium">{truncatedTitle}</h4>
                  <p className="pt-1">{truncatedDescription}</p>
                </NavLink>
              </li>
            );
          })
        )}
      </ul>
    </aside>
  );
}

export default SetupsBar;
