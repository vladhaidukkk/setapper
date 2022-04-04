import { builderConstants } from 'utils/constants';

const buildSetapperJson = (data) => {
  return { content: JSON.stringify(data), language: 'json' };
};
//
// const buildInstructionTxt = (data) => {};
//
// const buildStructureJson = (data) => {};

// const buildProjectStructure = () => {
//   return {
//     defaultFile: builderConstants.webpack.FILES.webpackConfig,
//     files: {
//       webpackConfig: builderConstants.webpack.FILES.webpackConfig,
//       packageJson: builderConstants.webpack.FILES.packageJson,
//     },
//     folders: {},
//   };
// };

const buildWebpackConfig = (options, initialOptions) => {
  const content = `
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

  return { content, language: 'javascript' };
};

const buildPackageJson = (data) => {
  const content = `
  {
    "name":"${data.title}",
    "version":"${data.version || '1.0.0'}",
    "private":true,
    "scripts":{
      "build":"webpack"
    },
    "devDependencies":{
      "webpack":"^5.70.0",
      "webpack-cli":"^4.9.2"
    }
  }
  `;

  console.log(content);

  return { content, language: 'json' };
};

// const buildPostcssConfig = (data) => {};

// const buildBabelConfig = (data) => {};

const webpackBuilder = (data) => {
  const commonFiles = builderConstants.common.FILES;
  const webpackFiles = builderConstants.webpack.FILES;
  const initialOptions = builderConstants.webpack.OPTIONS;

  const setapperJson = buildSetapperJson(data);

  const webpackConfig = buildWebpackConfig(data.options, initialOptions);
  const packageJson = buildPackageJson(data);

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
      'instruction.txt': {
        content: 'hello',
        language: 'txt',
      },
      'structure.json': {
        content: '{}',
        language: 'json',
      },
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
