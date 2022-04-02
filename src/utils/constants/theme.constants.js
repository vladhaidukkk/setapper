import { DesktopComputerIcon, MoonIcon, SunIcon } from '@heroicons/react/solid';

const LIGHT = 'light';
const DARK = 'dark';
const SYSTEM = 'system';

const LIGHT_ICON = SunIcon;
const DARK_ICON = MoonIcon;
const SYSTEM_ICON = DesktopComputerIcon;

const themeConstants = {
  LIGHT,
  DARK,
  SYSTEM,
  LIGHT_ICON,
  DARK_ICON,
  SYSTEM_ICON,
  LIST: [
    {
      label: 'Light',
      value: LIGHT,
      icon: LIGHT_ICON,
    },
    {
      label: 'Dark',
      value: DARK,
      icon: DARK_ICON,
    },
    {
      label: 'System',
      value: SYSTEM,
      icon: SYSTEM_ICON,
    },
  ],
};

export default themeConstants;
