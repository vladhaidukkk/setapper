import React from 'react';
import { sectionConstants } from 'utils/constants';
import { NavLink } from 'react-router-dom';

function SectionsBar() {
  return (
    <aside className="w-56 bg-zinc-300">
      <ul>
        {sectionConstants.LIST.map(({ name, Icon }) => (
          <li key={name}>
            <NavLink to={`/builder/${name}`} className={(state) => (state.isActive ? 'underline' : undefined)}>
              <Icon className="h-7 w-7" />
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SectionsBar;
