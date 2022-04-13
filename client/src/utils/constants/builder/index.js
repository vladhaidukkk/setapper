import webpackConstants from './webpack.constants';
import gulpConstants from './gulp.constants';
import eslintConstants from './eslint.constants';
import commonConstants from './common.constants';

const builderConstants = {
  common: commonConstants,
  webpack: webpackConstants,
  gulp: gulpConstants,
  eslint: eslintConstants,
};

export default builderConstants;
