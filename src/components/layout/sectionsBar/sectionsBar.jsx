import React from 'react';
import { sectionConstants } from 'utils/constants';
import { NavLink } from 'react-router-dom';

function SectionsBar() {
  return (
    <aside className="w-56 bg-zinc-300">
      <ul>
        {sectionConstants.LIST.map((item) => (
          <li key={item.name}>
            <NavLink to={`/builder/${item.name}`} className={(state) => (state.isActive ? 'underline' : undefined)}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SectionsBar;
