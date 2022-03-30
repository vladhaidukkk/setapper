import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from 'components/ui/headerNav';
import ThemeSelect from 'components/ui/themeSelect';
import AccountBox from 'components/ui/accountBox';
import Container from 'components/common/container';
import { PrivateElement } from 'hoc';
import PropTypes from 'prop-types';

function Header({ fluid }) {
  return (
    <header className="border-b border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-900">
      <Container fluid={fluid}>
        <div className="flex h-10 items-center justify-between">
          <Link
            to="/"
            className="hidden h-6 items-center space-x-2 font-medium text-black outline-none dark:text-white md:flex"
          >
            {/* <AdjustedImg alt="Logo" img={Logo} /> */}
            <span>Setapper</span>
          </Link>
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
