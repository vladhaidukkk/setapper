import React from 'react';
import { EyeIcon } from '@heroicons/react/solid';
import NavDropdown from './navDropdown/navDropdown';
import { PrivateElement, PublicElement } from '../../../hoc';
import NavMenuDropdown from './navMenuDropdown/navMenuDropdown';
import NavItem from './navItem/navItem';
import { toolConstants } from '../../../utils/constants';

function HeaderNav() {
  return (
    <nav>
      <NavMenuDropdown />
      <ul className="hidden items-center space-x-1 md:flex">
        <PublicElement>
          <NavItem path="/auth/login">Log in</NavItem>
        </PublicElement>
        <PublicElement>
          <NavItem path="/auth/registration">Sign up</NavItem>
        </PublicElement>
        <PrivateElement>
          <NavItem path="/dashboard">Dashboard</NavItem>
        </PrivateElement>
        <PrivateElement>
          <NavDropdown
            label="Builder"
            path="/builder"
            pathPrefix="/builder"
            options={[
              { index: true, label: 'Inspector', Icon: EyeIcon, divided: true },
              ...toolConstants.LIST.map((item) => ({ ...item, path: item.value })),
            ]}
          />
        </PrivateElement>
        <NavDropdown
          label="Presets"
          path="/presets"
          pathPrefix="/presets"
          options={[
            { index: true, label: 'Inspector', Icon: EyeIcon, divided: true },
            ...toolConstants.LIST.map((item) => ({ ...item, path: item.value })),
          ]}
        />
      </ul>
    </nav>
  );
}

export default HeaderNav;
