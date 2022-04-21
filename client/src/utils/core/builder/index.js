import webpackBuilder from './webpack.builder';
import gulpBuilder from './gulp.builder';
import eslintBuilder from './eslint.builder';
import rollupBuilder from './rollup.builder';
import prettierBuilder from './prettier.builder';
import stylelintBuilder from './stylelint.builder';

const builderUtil = {
  webpack: webpackBuilder,
  gulp: gulpBuilder,
  eslint: eslintBuilder,
  rollup: rollupBuilder,
  prettier: prettierBuilder,
  stylelint: stylelintBuilder,
};

export default builderUtil;
