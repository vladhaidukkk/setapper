import webpackBuilder from './webpack.builder';
import gulpBuilder from './gulp.builder';
import eslintBuilder from './eslint.builder';

const builderUtil = {
  webpack: webpackBuilder,
  gulp: gulpBuilder,
  eslint: eslintBuilder,
};

export default builderUtil;
