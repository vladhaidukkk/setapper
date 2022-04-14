import webpackConstants from './webpack.constants';
import gulpConstants from './gulp.constants';
import eslintConstants from './eslint.constants';
import commonConstants from './common.constants';
import rollupConstants from './rollup.constants';
import prettierConstants from './prettier.constants';
import stylelintConstants from './stylelint.constants';

const builderConstants = {
  common: commonConstants,
  webpack: webpackConstants,
  gulp: gulpConstants,
  eslint: eslintConstants,
  rollup: rollupConstants,
  prettier: prettierConstants,
  stylelint: stylelintConstants,
};

export default builderConstants;
