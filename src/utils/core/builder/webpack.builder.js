import { builderConstants } from 'utils/constants';

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
    options.manifestPlugin ? "const {WebpackManifestPlugin}=require('webpack-manifest-plugin');" : ''
  }${options.robotstxtPlugin ? "const RobotstxtPlugin=require('robotstxt-webpack-plugin');" : ''}

  module.exports={
    entry:'./${options.entryFolder || initialOptions.entryFolder.defaultValue}/${
    options.entryFilename || options.entryFilename.defaultValue
  }',
    output:{
      path:path.resolve(__dirname,'${options.outputFolder || initialOptions.outputFolder.defaultValue}'),
      filename:'${options.outputFilename || initialOptions.outputFilename.defaultValue}${
    options.hashOutputFilenames ? '.[contenthash:12]' : ''
  }.js',
      ${options.cleanOutputFolder ? 'clean: true' : ''}
    },
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
      ${options.manifestPlugin ? ',"webpack-manifest-plugin":"^5.0.0"' : ''}
      ${options.robotstxtPlugin ? ',"robotstxt-webpack-plugin":"^7.0.0"' : ''}
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
