import { builderConstants } from 'utils/constants';

const webpackBuilderUtil = (options) => {
  const initialOptions = builderConstants.webpack.OPTIONS;

  const webpackConfigJs = `
    const path = require('path');

    module.exports = {
      entry: './${options.entry || initialOptions.entry.defValue}',
      output: {
        path: path.resolve(__dirname, '${options.outputPath || initialOptions.outputPath.defValue}'),
        filename: '${options.outputFilename || initialOptions.outputFilename.defValue}',
        ${options.clean ? 'clean: true' : ''}
      },
      ${
        options.optimization
          ? `optimization: {
              splitChunks: {
                chunks: 'all'
              }
            }`
          : ''
      }
    };
  `;

  return webpackConfigJs;
};

export default webpackBuilderUtil;
