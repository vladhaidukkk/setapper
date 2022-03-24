import { ReactComponent as EslintIcon } from 'assets/icons/eslint.svg';
import { ReactComponent as WebpackIcon } from 'assets/icons/webpack.svg';
import { ReactComponent as GulpIcon } from 'assets/icons/gulp.svg';

const toolConstants = {
  LIST: [
    {
      name: 'webpack',
      Icon: WebpackIcon,
    },
    {
      name: 'gulp',
      Icon: GulpIcon,
    },
    {
      name: 'eslint',
      Icon: EslintIcon,
    },
  ],
};

export default toolConstants;
