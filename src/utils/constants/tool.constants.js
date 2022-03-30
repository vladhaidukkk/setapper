import { ReactComponent as EslintIcon } from 'assets/icons/eslint.svg';
import { ReactComponent as WebpackIcon } from 'assets/icons/webpack.svg';
import { ReactComponent as GulpIcon } from 'assets/icons/gulp.svg';

// todo: add description and docLink
const toolConstants = {
  LIST: [
    {
      label: 'Webpack',
      value: 'webpack',
      icon: WebpackIcon,
    },
    {
      label: 'Gulp',
      value: 'gulp',
      icon: GulpIcon,
    },
    {
      label: 'Eslint',
      value: 'eslint',
      icon: EslintIcon,
    },
  ],
};

export default toolConstants;
