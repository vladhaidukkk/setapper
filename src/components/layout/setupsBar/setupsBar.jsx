import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { capitalize, orderBy } from 'lodash';
import { useSelector } from 'react-redux';
import { getSetupsByTool, getSetupsLoadingStatus } from 'store/setups/setups.selectors';
import { hasMatchHelper, truncateOnIndexHelper } from 'utils/helpers';
import { sortConstants } from 'utils/constants';
import PropTypes from 'prop-types';
import { parserUtil } from 'utils/core';
import Search from 'components/common/search';
import Filter from 'components/common/filter';
import NewSetupBtn from 'components/ui/newSetupBtn';

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
  const { tool, setupId } = useParams();
  const isSetupsLoading = useSelector(getSetupsLoadingStatus());
  const setups = useSelector(getSetupsByTool(tool));
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState({ iter: 'title', order: 'asc' });

  const searchedSetups = searchValue
    ? setups.filter((setup) => hasMatchHelper(new RegExp(searchValue, 'i'), setup, ['title', 'description']))
    : setups;
  const sortedSetups = orderBy(searchedSetups, [sortValue.iter], [sortValue.order]);

  const handleSearchChange = (newValue) => {
    setSearchValue(() => newValue);
  };

  const handleSortChange = (newIter, newOrder) => {
    setSortValue(() => ({ iter: newIter, order: newOrder }));
  };

  return (
    <aside className="flex h-full w-80 flex-col space-y-5 p-2.5">
      <div className="flex h-10 items-center space-x-2.5">
        <div className="flex h-full flex-1 items-center rounded bg-gray-100 shadow dark:bg-gray-700">
          <Search id="setups-search" onChange={handleSearchChange} value={searchValue} placeholder="Search setup..." />
          <Filter
            id="setups-filter"
            onChange={handleSortChange}
            value={sortValue}
            iterOptions={sortConstants.SETUPS.iterOptions}
            orderOptions={sortConstants.SETUPS.orderOptions}
          />
        </div>
        {setupId && <NewSetupBtn />}
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
