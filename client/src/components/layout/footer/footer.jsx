import React from 'react';
import Container from '../../common/container';
import Logo from '../../ui/logo';

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-900">
      <Container>
        <div className="flex items-center justify-between py-1">
          <Logo />
          <p className="text-xs text-stone-700 dark:text-stone-300 sm:text-sm">Copyright &copy; 2022 Setapper V.H.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
