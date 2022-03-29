import React from 'react';
import { Link } from 'react-router-dom';
import HeaderNav from 'components/ui/headerNav';
import ThemeSelect from 'components/ui/themeSelect';
import AccountBox from 'components/ui/accountBox';
import Container from 'components/common/container';
import { PrivateElement } from 'hoc';

function Header() {
  return (
    <header className="border-b border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-900">
      <Container>
        <div className="flex items-center justify-between">
          {/* <Link to="/" className="font-medium"> */}
          {/*  <AdjustedImg alt="Logo" img={} /> */}
          {/* </Link> */}
          <Link to="/" className="block font-medium text-black outline-none dark:text-white">
            Setapper
          </Link>
          <HeaderNav />
          <div className="flex items-center space-x-2">
            <ThemeSelect id="theme-select" />
            <PrivateElement>
              <AccountBox id="header-account-box" />
            </PrivateElement>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
