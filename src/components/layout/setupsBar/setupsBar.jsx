import React, { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { capitalize } from 'lodash';
import { useSelector } from 'react-redux';
import { getSetupsByTool, getSetupsLoadingStatus } from 'store/setups/setups.selectors';

function SetupsBar() {
  const { tool } = useParams();
  const isSetupsLoading = useSelector(getSetupsLoadingStatus());
  const setups = useSelector(getSetupsByTool(tool));
  const [searchValue, setSearchValue] = useState('');

  const filteredSetups = searchValue
    ? setups.filter((setup) => setup.title.includes(searchValue) || setup.description.includes(searchValue))
    : setups;

  const handleSearchChange = ({ target }) => {
    setSearchValue(() => target.value);
  };

  return (
    <aside className="w-60 space-y-3 bg-zinc-200 p-2.5">
      <div className="flex space-x-2">
        <input
          type="text"
          className="flex-1 rounded border px-1 py-0.5 shadow"
          onChange={handleSearchChange}
          value={searchValue}
          placeholder="Search..."
        />
        <Link to={`/builder/${tool}`} className="shrink-0 rounded border bg-sky-300 p-1 shadow">
          +
        </Link>
      </div>
      <h1 className="text-xl font-medium">{capitalize(tool)}</h1>
      <ul className="space-y-2">
        {isSetupsLoading ? (
          <li>loading setups...</li>
        ) : (
          filteredSetups?.map((setup) => (
            <li className="space-y-1 rounded border bg-zinc-50 p-1 shadow" key={setup.id}>
              <NavLink to={`/builder/${tool}/${setup.id}`}>
                <h4 className="text-md border-b font-medium">{setup.title}</h4>
                <p>{setup.description}</p>
              </NavLink>
            </li>
          ))
        )}
      </ul>
    </aside>
  );
}

export default SetupsBar;
