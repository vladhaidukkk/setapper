import React from 'react';
import PropTypes from 'prop-types';
import HeaderNav from '../../ui/headerNav';
import ThemeSelect from '../../ui/themeSelect';
import AccountBox from '../../ui/accountBox';
import Container from '../../common/container';
import { PrivateElement } from '../../../hoc';
import Logo from '../../ui/logo';

function Header({ fluid }) {
  return (
    <header className="border-b border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-900">
      <Container fluid={fluid}>
        <div className="flex h-10 items-center justify-between">
          <Logo />
          <HeaderNav />
          <div className="flex items-center space-x-2">
            <ThemeSelect />
            <PrivateElement>
              <AccountBox />
            </PrivateElement>
          </div>
        </div>
      </Container>
    </header>
  );
}

Header.defaultProps = {
  fluid: false,
};

Header.propTypes = {
  fluid: PropTypes.bool,
};

export default Header;
