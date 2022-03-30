import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { orderBy } from 'lodash';
import { useSelector } from 'react-redux';
import { getSetupsByTool, getSetupsLoadingStatus } from 'store/setups/setups.selectors';
import { hasMatchHelper } from 'utils/helpers';
import { sortConstants } from 'utils/constants';
import Search from 'components/common/search';
import Filter from 'components/common/filter';
import NewSetupBtn from 'components/ui/newSetupBtn';
import ToolsMenu from 'components/common/toolsMenu';
import toolConstants from 'utils/constants/tool.constants';
import SetupsList from 'components/ui/setupsList/setupsList';

function SetupsBar() {
  const { tool, setupId } = useParams();
  const isSetupsLoading = useSelector(getSetupsLoadingStatus());
  const setups = useSelector(getSetupsByTool(tool));
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState({ iter: 'title', order: 'asc' });

  const searchedSetups =
    searchValue && setups
      ? setups.filter((setup) => hasMatchHelper(new RegExp(searchValue, 'i'), setup, ['title', 'description']))
      : setups;
  const sortedSetups = searchedSetups && orderBy(searchedSetups, [sortValue.iter], [sortValue.order]);

  const handleSearchChange = (newValue) => {
    setSearchValue(() => newValue);
  };

  const handleSortChange = (newIter, newOrder) => {
    setSortValue(() => ({ iter: newIter, order: newOrder }));
  };

  return (
    <aside className="flex h-full w-80 flex-col space-y-2.5 border-r border-stone-200 bg-stone-50 p-2.5 dark:border-stone-700 dark:bg-stone-900">
      <div className="flex h-10 min-h-[2.5rem] items-center space-x-2.5">
        <div
          className="flex h-full flex-1 items-center rounded-md border border-stone-300 bg-white shadow-sm outline-none
           focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 dark:border-stone-700
          dark:bg-stone-800 dark:focus-within:border-indigo-500 dark:focus-within:ring-indigo-500"
        >
          <Search onChange={handleSearchChange} value={searchValue} placeholder="Search setup..." />
          <Filter
            onChange={handleSortChange}
            value={sortValue}
            iterOptions={sortConstants.SETUPS.iterOptions}
            orderOptions={sortConstants.SETUPS.orderOptions}
          />
        </div>
        {setupId && <NewSetupBtn />}
      </div>
      <ToolsMenu label="Select tool" pathPrefix="/builder/" options={toolConstants.LIST} />
      {!isSetupsLoading ? <SetupsList list={sortedSetups} matchString={searchValue} /> : <div>loading...</div>}
    </aside>
  );
}

export default SetupsBar;
