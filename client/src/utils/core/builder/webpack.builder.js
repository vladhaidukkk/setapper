import { builderConstants } from '../../constants';

const buildSetapperJson = (data) => {
  return { content: JSON.stringify(data), language: 'json' };
};

const buildInstructionTxt = () => ({ content: 'hello', language: 'txt' });

const buildStructureJson = (options, initialOptions) => {
  const commonFiles = builderConstants.common.FILES;
  const webpackFiles = builderConstants.webpack.FILES;

  const content = `
  {
    "root":{
      "${options.entryFolder || initialOptions.entryFolder.defaultValue}":{
        "files":[
          "${options.entryFilename || initialOptions.entryFilename.defaultValue}.js"
        ]
      },
      "files":[
        "${webpackFiles.webpackConfig}",
        "${commonFiles.packageJson}"
      ]
    }
  }
  `;

  return { content, language: 'json' };
};

const buildWebpackConfig = (options, initialOptions) => {
  const content = `
  const path=require('path');
  ${options.htmlPlugin ? "const HtmlWebpackPlugin=require('html-webpack-plugin');" : ''}${
    options.cssPlugin ? "const MiniCssExtractPlugin=require('mini-css-extract-plugin');" : ''
  }${options.eslintPlugin ? "const ESLintPlugin=require('eslint-webpack-plugin');" : ''}${
    options.stylelintPlugin ? "const StylelintPlugin=require('stylelint-webpack-plugin');" : ''
  }${options.dotenvPlugin ? "const Dotenv=require('dotenv-webpack');" : ''}${
    options.optimizeCode
      ? "const TerserPlugin=require('terser-webpack-plugin');const CssMinimizerPlugin=require('css-minimizer-webpack-plugin');"
      : ''
  }

  ${
    options.envOptimization
      ? 'const envMode=process.env.NODE_ENV;const isProd=envMode===production;const isDev=envMode===development;'
      : ''
  }

  module.exports={
    mode:${options.envOptimization ? 'envMode||"production"' : '"production"'},
    entry:'./${options.entryFolder || initialOptions.entryFolder.defaultValue}/${
    options.entryFilename || initialOptions.entryFilename.defaultValue
  }.js',
    output:{
      path:path.resolve(__dirname,'${options.outputFolder || initialOptions.outputFolder.defaultValue}'),${
    options.envOptimization && options.hashOutputFilenames
      ? `filename:isProd?'${
          options.outputFilename || initialOptions.outputFilename.defaultValue
        }.[contenthash:12].js':'${options.outputFilename || initialOptions.outputFilename.defaultValue}.js'`
      : `filename:'${options.outputFilename || initialOptions.outputFilename.defaultValue}${
          options.hashOutputFilenames ? '.[contenthash:12]' : ''
        }.js'`
  },
      ${options.cleanOutputFolder ? 'clean:true' : ''}
    },${
      options.enableDevServer
        ? `devServer:{
            port: ${options.devServerPort || initialOptions.devServerPort.defaultValue},
            ${options.openDevServer ? 'open:true' : ''}
          },`
        : ''
    }${options.enableDevTools ? `devtool:${options.envOptimization ? 'isDev&&"source-map"' : '"source-map"'},` : ''}${
    options.optimizeCode
      ? `optimization:{
          splitChunks:{
            chunks:'all',
          },
          ${options.envOptimization ? 'minimize:isProd' : 'minimize:true'},
          minimizer:[new TerserPlugin(),new CssMinimizerPlugin()],
        },`
      : ''
  }${
    options.htmlPlugin ||
    options.cssPlugin ||
    options.eslintPlugin ||
    options.stylelintPlugin ||
    options.dotenvPlugin ||
    options.manifestPlugin ||
    options.robotstxtPlugin
      ? `plugins:[
        ${
          options.htmlPlugin
            ? `new HtmlWebpackPlugin({${options.htmlTitle ? `title:'${options.htmlTitle}',` : ''}template:'${
                options.htmlTemplate || initialOptions.htmlTemplate.defaultValue
              }',${options.envOptimization ? 'minify:isProd,' : ''}}),`
            : ''
        }${
          options.cssPlugin
            ? `new MiniCssExtractPlugin({filename:${
                options.envOptimization && options.hashOutputFilenames
                  ? `isProd?'${options.cssFilename || initialOptions.cssFilename.defaultValue}.[contenthash:12].css':'${
                      options.cssFilename || initialOptions.cssFilename.defaultValue
                    }.css'`
                  : `'${options.cssFilename || initialOptions.cssFilename.defaultValue}${
                      options.hashOutputFilenames ? '.[contenthash:12]' : ''
                    }.css'`
              }}),`
            : ''
        }${options.eslintPlugin ? 'new ESLintPlugin(),' : ''}${
          options.stylelintPlugin ? 'new StylelintPlugin(),' : ''
        }${options.dotenvPlugin ? 'new Dotenv(),' : ''}
      ]`
      : ''
  }
  };`;

  return { content, language: 'javascript' };
};

const buildPackageJson = (data, initialOptions) => {
  const { title, version, options } = data;

  const content = `
  {
    "name":"${title}",
    "version":"${version || '1.0.0'}",
    "private":true,
    "scripts":{
      "build":"webpack ${options.entryFolder || initialOptions.entryFolder.defaultValue}"
    },
    "devDependencies":{
      "webpack":"^5.70.0",
      "webpack-cli":"^4.9.2"
      ${options.htmlPlugin ? ',"html-webpack-plugin":"^5.5.0"' : ''}
      ${options.cssPlugin ? ',"mini-css-extract-plugin":"^2.6.0"' : ''}
      ${options.eslintPlugin ? ',"eslint":"^8.11.0","eslint-webpack-plugin":"^3.1.1"' : ''}
      ${options.stylelintPlugin ? ',"stylelint": "^14.6.0","stylelint-webpack-plugin":"^3.1.1"' : ''}
      ${options.dotenvPlugin ? ',"dotenv-webpack":"^7.1.0"' : ''}
    }
  }
  `;

  return { content, language: 'json' };
};

// const buildPostcssConfig = (data) => {};

// const buildBabelConfig = (data) => {};

const webpackBuilder = (data) => {
  const commonFiles = builderConstants.common.FILES;
  const webpackFiles = builderConstants.webpack.FILES;
  const initialOptions = builderConstants.webpack.OPTIONS;

  const setapperJson = buildSetapperJson(data);
  const instructionTxt = buildInstructionTxt();
  const structureJson = buildStructureJson(data.options, initialOptions);

  const webpackConfig = buildWebpackConfig(data.options, initialOptions);
  const packageJson = buildPackageJson(data, initialOptions);

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

  return {
    metaFiles: {
      default: commonFiles.setapperJson,
      list: [commonFiles.setapperJson, commonFiles.instructionTxt, commonFiles.structureJson],
      [commonFiles.setapperJson]: setapperJson,
      [commonFiles.instructionTxt]: instructionTxt,
      [commonFiles.structureJson]: structureJson,
    },
    setupFiles: {
      default: webpackFiles.webpackConfig,
      list: [webpackFiles.webpackConfig, commonFiles.packageJson],
      [webpackFiles.webpackConfig]: webpackConfig,
      [commonFiles.packageJson]: packageJson,
    },
  };
};

export default webpackBuilder;
