import React from 'react';
import NavItem from 'components/ui/headerNav/navItem/navItem';
import NavDropdown from 'components/ui/headerNav/navDropdown/navDropdown';
import { ReactComponent as EslintIcon } from 'assets/icons/tools/eslint.svg';
import { ReactComponent as WebpackIcon } from 'assets/icons/tools/webpack.svg';
import { ReactComponent as GulpIcon } from 'assets/icons/tools/gulp.svg';
import { PrivateElement, PublicElement } from 'hoc';
import NavMenuDropdown from 'components/ui/headerNav/navMenuDropdown/navMenuDropdown';
import { EyeIcon } from '@heroicons/react/solid';

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
              { path: 'webpack', label: 'Webpack', Icon: WebpackIcon },
              { path: 'gulp', label: 'Gulp', Icon: GulpIcon },
              { path: 'eslint', label: 'Eslint', Icon: EslintIcon },
            ]}
          />
        </PrivateElement>
        <NavDropdown
          label="Presets"
          path="/presets"
          pathPrefix="/presets"
          options={[
            { index: true, label: 'Inspector', Icon: EyeIcon, divided: true },
            { path: 'webpack', label: 'Webpack', Icon: WebpackIcon },
            { path: 'gulp', label: 'Gulp', Icon: GulpIcon },
            { path: 'eslint', label: 'Eslint', Icon: EslintIcon },
          ]}
        />
      </ul>
    </nav>
  );
}

export default HeaderNav;
