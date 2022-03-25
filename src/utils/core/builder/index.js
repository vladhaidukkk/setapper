import webpackBuilder from 'utils/core/builder/webpack.builder';
import gulpBuilder from 'utils/core/builder/gulp.builder';
import eslintBuilder from 'utils/core/builder/eslint.builder';

const builderUtil = {
  webpack: webpackBuilder,
  gulp: gulpBuilder,
  eslint: eslintBuilder,
};

export default builderUtil;
