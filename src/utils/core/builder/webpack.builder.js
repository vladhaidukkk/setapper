import { builderConstants } from 'utils/constants';

const webpackBuilder = (options) => {
  const initialOptions = builderConstants.webpack.OPTIONS;

  const webpackConfigJs = `
  const path=require('path');

  module.exports={
    entry:'./${options.entryFolder || initialOptions.entryFolder.defaultValue}/${
    options.entryFile || options.entryFile.defaultValue
  }',
    output:{
      path:path.resolve(__dirname,'${options.outputFolder || initialOptions.outputFolder.defaultValue}'),
      filename:'${options.outputFile || initialOptions.outputFile.defaultValue}${
    options.hashOutputFiles ? '.[contenthash:12]' : ''
  }.js',
      ${options.cleanOutput ? 'clean: true' : ''}
    },
  };`;

  // const webpackConfigJs = `
  //   const path = require('path');
  //
  //   module.exports = {
  //     entry: './${options.entry || initialOptions.entry.defaultValue}',
  //     output: {
  //       path: path.resolve(__dirname, '${options.outputPath || initialOptions.outputPath.defaultValue}'),
  //       filename: '${options.outputFilename || initialOptions.outputFilename.defaultValue}',
  //       ${options.clean ? 'clean: true,' : ''}
  //     },
  //     ${
  //       options.optimization
  //         ? `optimization: {
  //             splitChunks: {
  //               chunks: 'all'
  //             },
  //           },`
  //         : ''
  //     }${
  //   options.cssLoader
  //     ? `module: {
  //         rules: [
  //           ${
  //             options.cssLoader
  //               ? `{
  //                 test: /\\.css$/i,
  //                 use: ['style-loader', 'css-loader'],
  //               },`
  //               : ''
  //           }${
  //         options.sassLoader
  //           ? `{
  //                 test: /\\.(s[ac]ss)$/i,
  //                 use: ['style-loader', 'css-loader', 'sass-loader'],
  //               },`
  //           : ''
  //       }
  //         ],
  //       },`
  //     : ''
  // }
  //   };
  // `;

  return webpackConfigJs;
};

export default webpackBuilder;
