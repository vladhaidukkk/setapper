import React from 'react';
import { toolConstants } from 'utils/constants';
import { NavLink, useParams } from 'react-router-dom';

function NavBar() {
  const { tool } = useParams();

  // todo: here shoul be havbar*not sectios)tools

  return (
    <aside className="flex w-20 flex-col items-center gap-y-4 bg-gray-900 py-8">
      <ul className="flex flex-col items-end gap-y-4 self-end">
        {toolConstants.LIST.map((item) => (
          <li
            key={item.name}
            className={
              item.name === tool
                ? 'relative rounded-l-xl bg-gray-800 before:absolute before:-top-8 before:right-0 before:h-8 before:w-4 before:rounded-br-xl before:shadow-inverse-top after:absolute after:-bottom-8 after:right-0 after:h-8 after:w-4 after:rounded-tr-xl after:shadow-inverse-bottom'
                : undefined
            }
          >
            <NavLink
              to={item.name}
              className={(state) =>
                `my-3 mr-3 ml-3 block rounded-xl p-2 ${state.isActive ? 'bg-gray-200 text-white' : 'text-primary'}`
              }
            >
              <item.Icon className="h-7 w-7" />
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default NavBar;
