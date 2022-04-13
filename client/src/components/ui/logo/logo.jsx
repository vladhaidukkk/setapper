import React from 'react';
import { Link } from 'react-router-dom';
import AdjustedImg from '../../common/adjustedImg';
import LogoBlack from '../../../assets/logo/logo-black.svg';
import LogoWhite from '../../../assets/logo/logo-white.svg';
import { useTheme } from '../../../hooks';
import themeConstants from '../../../utils/constants/theme.constants';

function Logo() {
  const { themeColor } = useTheme();

  return (
    <Link
      to="/"
      className="-ml-1 hidden h-6 items-center space-x-1 font-medium text-black outline-none dark:text-white md:flex"
    >
      <AdjustedImg alt="Logo" img={themeColor === themeConstants.LIGHT ? LogoBlack : LogoWhite} />
      <span>Setapper</span>
    </Link>
  );
}

export default Logo;
