import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { orderBy } from 'lodash';
import { getPresetsByTool, getPresetsLoadingStatus } from '../../../store/presets/presets.selectors';
import { hasMatchHelper } from '../../../utils/helpers';
import Search from '../../common/search';
import Filter from '../../common/filter';
import { sortConstants } from '../../../utils/constants';
import ToolsMenu from '../../common/toolsMenu';
import toolConstants from '../../../utils/constants/tool.constants';
import { SpinLoader } from '../../common/loaders';
import PresetsList from '../../ui/presetsList';

function PresetsBar() {
  const { tool } = useParams();
  const isPresetsLoading = useSelector(getPresetsLoadingStatus());
  const presets = useSelector(getPresetsByTool(tool));
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState({ iter: 'title', order: 'asc' });

  const searchedPresets =
    searchValue && presets
      ? presets.filter((preset) => hasMatchHelper(new RegExp(searchValue, 'i'), preset, ['title', 'description']))
      : presets;
  const sortedPresets = searchedPresets && orderBy(searchedPresets, [sortValue.iter], [sortValue.order]);

  const handleSearchChange = (newValue) => {
    setSearchValue(() => newValue);
  };

  const handleSortChange = (newIter, newOrder) => {
    setSortValue(() => ({ iter: newIter, order: newOrder }));
  };

  return (
    <aside className="flex h-full w-52 flex-col space-y-2.5 border-r border-stone-200 bg-stone-50 p-2.5 dark:border-stone-700 dark:bg-stone-900 lg:w-64 xl:w-72">
      <div className="flex h-10 min-h-[2.5rem] items-center space-x-2.5">
        <div
          className="flex h-full flex-1 items-center rounded-md border border-stone-300 bg-white shadow-sm outline-none
           focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 dark:border-stone-700
          dark:bg-stone-800 dark:focus-within:border-indigo-500 dark:focus-within:ring-indigo-500"
        >
          <Search onChange={handleSearchChange} value={searchValue} placeholder="Search preset..." />
          <Filter
            onChange={handleSortChange}
            value={sortValue}
            iterOptions={sortConstants.PRESETS.iterOptions}
            orderOptions={sortConstants.PRESETS.orderOptions}
          />
        </div>
      </div>
      <ToolsMenu label="Select tool" pathPrefix="/presets/" options={toolConstants.LIST} />
      <div className="mb-2.5 h-px w-full bg-stone-300 dark:bg-stone-700" />
      {!isPresetsLoading ? (
        <PresetsList
          list={sortedPresets}
          notFound={sortedPresets?.length === 0 && presets?.length !== 0}
          matchString={searchValue}
        />
      ) : (
        tool && (
          <div className="flex w-max items-center rounded-md border border-stone-300 bg-white p-1.5 pr-2.5 text-sm text-stone-600 shadow-sm dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400">
            <SpinLoader className="mr-1.5 h-4.5 w-4.5" />
            <div>Loading presets...</div>
          </div>
        )
      )}
    </aside>
  );
}

export default PresetsBar;
