import webpackConstants from 'utils/constants/builder/webpack.constants';
import gulpConstants from 'utils/constants/builder/gulp.constants';
import eslintConstants from 'utils/constants/builder/eslint.constants';
import commonConstants from 'utils/constants/builder/common.constants';

const builderConstants = {
  common: commonConstants,
  webpack: webpackConstants,
  gulp: gulpConstants,
  eslint: eslintConstants,
};

export default builderConstants;
