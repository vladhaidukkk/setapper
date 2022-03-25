import { builderConstants } from 'utils/constants';

const webpackBuilder = (options) => {
  const initialOptions = builderConstants.webpack.OPTIONS;

  // const webpackConfigJs = `
  //   const path = require('path');
  //
  //   module.exports = ${JSON.stringify({
  //     entry: `./${options.entry || initialOptions.entry.defValue}`,
  //     filename: `${options.outputFilename || initialOptions.outputFilename.defValue}`
  //     `${options.clean ? 'clean: true,' : ''}`
  //   })}
  // `;

  const webpackConfigJs = `
    const path = require('path');

    module.exports = {
      entry: './${options.entry || initialOptions.entry.defValue}',
      output: {
        path: path.resolve(__dirname, '${options.outputPath || initialOptions.outputPath.defValue}'),
        filename: '${options.outputFilename || initialOptions.outputFilename.defValue}',
        ${options.clean ? 'clean: true,' : ''}
      },
      ${
        options.optimization
          ? `optimization: {
              splitChunks: {
                chunks: 'all'
              },
            },`
          : ''
      }${
    options.cssLoader
      ? `module: {
          rules: [
            ${
              options.cssLoader
                ? `{
                  test: /\\.css$/i,
                  use: ['style-loader', 'css-loader'],
                },`
                : ''
            }${
          options.sassLoader
            ? `{
                  test: /\\.(s[ac]ss)$/i,
                  use: ['style-loader', 'css-loader', 'sass-loader'],
                },`
            : ''
        }
          ],
        },`
      : ''
  }
    };
  `;

  //   ${
  //         options.cssLoader
  //           ? `module: {
  //               rules: [
  //                 ${
  //                   options.cssLoader
  //                     ? `{
  //                         test: /\.css$/i,
  //                         use: ['style-loader', 'css-loader'],
  //                       }`
  //                     : ''
  //                 }
  //               ]
  //             }`
  // : ''
  // }

  return webpackConfigJs;
};

export default webpackBuilder;
