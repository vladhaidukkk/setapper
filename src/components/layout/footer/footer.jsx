import React from 'react';
import Container from 'components/common/container';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-900">
      <Container>
        <div className="flex items-center justify-between py-1">
          {/* <Link to="/" className="font-medium"> */}
          {/*  <AdjustedImg alt="Logo" img={} /> */}
          {/* </Link> */}
          <Link to="/" className="block font-medium text-black outline-none dark:text-white">
            Setapper
          </Link>
          <p className="text-xs text-stone-700 dark:text-stone-300 sm:text-sm">Copyright &copy; 2022 Setapper V.H.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
