import React from 'react';
import NavItem from 'components/ui/headerNav/navItem/navItem';
import NavDropdown from 'components/ui/headerNav/navDropdown/navDropdown';
import { ReactComponent as EslintIcon } from 'assets/icons/eslint.svg';
import { ReactComponent as WebpackIcon } from 'assets/icons/webpack.svg';
import { ReactComponent as GulpIcon } from 'assets/icons/gulp.svg';
import { PrivateElement, PublicElement } from 'hoc';

function HeaderNav() {
  return (
    <nav>
      <ul className="flex items-center space-x-1">
        <PublicElement>
          <NavItem path="auth/login">Log in</NavItem>
        </PublicElement>
        <PublicElement>
          <NavItem path="auth/registration">Sign up</NavItem>
        </PublicElement>
        <PrivateElement>
          <NavItem path="dashboard">Dashboard</NavItem>
        </PrivateElement>
        <PrivateElement>
          <NavDropdown
            label="Builder"
            path="builder/inspector"
            pathPrefix="builder/"
            options={[
              { path: 'inspector', label: 'Inspector', divided: true },
              { path: 'webpack', label: 'Webpack', Icon: WebpackIcon },
              { path: 'gulp', label: 'Gulp', Icon: GulpIcon },
              { path: 'eslint', label: 'Eslint', Icon: EslintIcon },
            ]}
          />
        </PrivateElement>
        <NavDropdown
          label="Presets"
          path="presets"
          pathPrefix="presets/"
          options={[
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
