import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { builderConstants } from '../../constants';
import formatterUtil from '../formatter.util';

const buildSetapperJson = (data) => {
  return { content: JSON.stringify(data), language: 'json' };
};

const buildInstructionJson = (options) => {
  const content = `
  {
    "start":"To start development download setup",
    "preparation":"Before coding download all dependencies using (npm install) or (yarn install)",
    "commands":{
      ${options.enableDevServer ? '"start":"Run your project on development server",' : ''}
      "build":"Build your project for production"
      ${options.envOptimization ? ',"dev":"Build your project in development mode"' : ''}
    },
    "commandsHelp":"If you use npm you can run commands using (npm run command-name), if yarn (yarn command-name)"
  }
  `;

  return { content, language: 'json' };
};

const buildStructureJson = (options, initialOptions) => {
  const commonFiles = builderConstants.common.FILES;
  const webpackFiles = builderConstants.webpack.FILES;

  const content = `
  {
    "root":{
      "${options.entryFolder || initialOptions.entryFolder.defaultValue}":{
        "files":[
          "${options.entryFilename || initialOptions.entryFilename.defaultValue}.js"
          ${options.htmlPlugin ? `,"${options.htmlTemplate || initialOptions.htmlTemplate.defaultValue}.html"` : ''}
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
            ? `new HtmlWebpackPlugin({${options.htmlTitle ? `title:'${options.htmlTitle}',` : ''}template:'./${
                options.entryFolder || initialOptions.entryFolder.defaultValue
              }/${options.htmlTemplate || initialOptions.htmlTemplate.defaultValue}.html',${
                options.envOptimization ? 'minify:isProd,' : ''
              }}),`
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
      ],`
      : ''
  }${
    options.htmlLoader ||
    options.cssLoader ||
    options.postcssLoader ||
    options.sassLoader ||
    options.lessLoader ||
    options.babelLoader ||
    options.xmlLoader ||
    options.imagesLoader ||
    options.fontsLoader
      ? `module:{rules:[
        ${options.htmlLoader ? "{test:/\\.html$/i,loader: 'html-loader',}," : ''}${
          options.cssLoader
            ? `{test:/\\.css$/i,use:[${
                options.envOptimization && options.cssPlugin
                  ? 'isProd?MiniCssExtractPlugin.loader:"style-loader"'
                  : `${options.cssPlugin ? 'MiniCssExtractPlugin.loader' : '"style-loader"'}`
              },'css-loader',${
                options.postcssLoader && options.postcssEnvPreset
                  ? `{loader:"postcss-loader",options:{postcssOptions:{plugins:[["postcss-preset-env",{}]]}}}`
                  : `${options.postcssLoader ? '"postcss-loader"' : ''}`
              }],},`
            : ''
        }${
          options.cssLoader && options.sassLoader
            ? `{test:/\\.s[ac]ss$/i,use:[${
                options.envOptimization && options.cssPlugin
                  ? 'isProd?MiniCssExtractPlugin.loader:"style-loader"'
                  : `${options.cssPlugin ? 'MiniCssExtractPlugin.loader' : '"style-loader"'}`
              },'css-loader',${
                options.postcssLoader && options.postcssEnvPreset
                  ? `{loader:"postcss-loader",options:{postcssOptions:{plugins:[["postcss-preset-env",{}]]}}},`
                  : `${options.postcssLoader ? '"postcss-loader",' : ''}`
              }"resolve-url-loader","sass-loader"],},`
            : ''
        }${
          options.cssLoader && options.lessLoader
            ? `{test:/\\.less$/i,use:[${
                options.envOptimization && options.cssPlugin
                  ? 'isProd?MiniCssExtractPlugin.loader:"style-loader"'
                  : `${options.cssPlugin ? 'MiniCssExtractPlugin.loader' : '"style-loader"'}`
              },'css-loader',${
                options.postcssLoader && options.postcssEnvPreset
                  ? `{loader:"postcss-loader",options:{postcssOptions:{plugins:[["postcss-preset-env",{}]]}}},`
                  : `${options.postcssLoader ? '"postcss-loader",' : ''}`
              }"less-loader"],},`
            : ''
        }${
          options.babelLoader
            ? `{test:/\\.${
                options.reactPreset ? '(js|jsx)' : 'js'
              }$/i,exclude: /node_modules/,use:{loader:"babel-loader",options:{presets:["@babel/preset-env",${
                options.reactPreset ? '"@babel/preset-react"' : ''
              }]}}},`
            : ''
        }${
          options.babelLoader && options.typescriptPreset
            ? `{test:/\\.${
                options.reactPreset ? '(ts|tsx)' : 'ts'
              }$/i,exclude: /node_modules/,use:{loader:"babel-loader",options:{presets:["@babel/preset-env",${
                options.reactPreset ? '"@babel/preset-react",' : ''
              }"@babel/preset-typescript"]}}},`
            : ''
        }${options.xmlLoader ? '{test: /\\.xml$/i,type: "xml-loader"},' : ''}${
          options.imagesLoader ? '{test: /\\.(png|svg|jpg|jpeg|gif)$/i,type: "asset/resource"},' : ''
        }${options.fontsLoader ? '{test: /\\.(woff|woff2|eot|ttf|otf)$/i,type: "asset/resource"},' : ''}
      ]}`
      : ''
  }
  };`;

  return { content, language: 'javascript' };
};

const buildPackageJson = (data) => {
  const { title, version, options } = data;

  const content = `
  {
    "name":"${title}",
    "version":"${version}",
    "private":true,
    "scripts":{
      ${
        options.enableDevServer
          ? `"start":"${options.envOptimization ? 'cross-env NODE_ENV=development ' : ''}webpack serve",`
          : ''
      }
      "build":"${options.envOptimization ? 'cross-env NODE_ENV=production ' : ''}webpack"
      ${options.envOptimization ? ',"dev":"cross-env NODE_ENV=development webpack"' : ''}
    },
    "devDependencies":{
      "webpack":"^5.70.0",
      "webpack-cli":"^4.9.2"
      ${options.enableDevServer ? ',"webpack-dev-server": "^4.7.4"' : ''}
      ${options.envOptimization ? ',"cross-env": "^7.0.3"' : ''}
      ${options.htmlPlugin ? ',"html-webpack-plugin":"^5.5.0"' : ''}
      ${options.cssPlugin ? ',"mini-css-extract-plugin":"^2.6.0"' : ''}
      ${options.eslintPlugin ? ',"eslint":"^8.11.0","eslint-webpack-plugin":"^3.1.1"' : ''}
      ${options.stylelintPlugin ? ',"stylelint": "^14.6.0","stylelint-webpack-plugin":"^3.1.1"' : ''}
      ${options.dotenvPlugin ? ',"dotenv-webpack":"^7.1.0"' : ''}
      ${options.optimizeCode ? ',"terser-webpack-plugin": "^5.3.1","css-minimizer-webpack-plugin": "^3.4.1"' : ''}
      ${options.htmlLoader ? ',"html-loader": "^3.1.0"' : ''}
      ${options.cssLoader ? ',"css-loader": "^6.7.1","style-loader": "^3.3.1"' : ''}
      ${options.postcssLoader ? ',"postcss": "^8.4.12","postcss-loader": "^6.2.1"' : ''}
      ${options.postcssEnvPreset ? ',"postcss-preset-env": "^7.4.3"' : ''}
      ${options.sassLoader ? ',"sass": "^1.49.9","sass-loader": "^12.6.0","resolve-url-loader": "^5.0.0"' : ''}
      ${options.lessLoader ? ',"less": "^4.1.2","less-loader": "^10.2.0"' : ''}
      ${options.babelLoader ? ',"@babel/core": "^7.17.8","@babel/preset-env": "^7.16.11","babel-loader": "^8.2.3"' : ''}
      ${options.reactPreset ? ',"@babel/preset-react": "^7.16.7"' : ''}
      ${options.typescriptPreset ? ',"@babel/preset-typescript": "^7.16.7"' : ''}
      ${options.xmlLoader ? ',"xml-loader": "^1.2.1"' : ''}
    }${
      options.babelLoader
        ? ',"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}'
        : ''
    }
  }
  `;

  return { content, language: 'json' };
};

const webpackBuilder = (data) => {
  const commonFiles = builderConstants.common.FILES;
  const webpackFiles = builderConstants.webpack.FILES;
  const initialOptions = builderConstants.webpack.OPTIONS;

  const setapperJson = buildSetapperJson(data);
  const instructionJson = buildInstructionJson(data.options);
  const structureJson = buildStructureJson(data.options, initialOptions);

  const webpackConfig = buildWebpackConfig(data.options, initialOptions);
  const packageJson = buildPackageJson(data);

  return {
    metaFiles: {
      default: commonFiles.setapperJson,
      list: [commonFiles.setapperJson, commonFiles.instructionJson, commonFiles.structureJson],
      [commonFiles.setapperJson]: setapperJson,
      [commonFiles.instructionJson]: instructionJson,
      [commonFiles.structureJson]: structureJson,
    },
    setupFiles: {
      default: webpackFiles.webpackConfig,
      list: [webpackFiles.webpackConfig, commonFiles.packageJson],
      [webpackFiles.webpackConfig]: webpackConfig,
      [commonFiles.packageJson]: packageJson,
    },
    download: async (folderName) => {
      const zip = new JSZip();

      const folder = zip.folder(folderName || 'webpack-setup');
      folder.file(webpackFiles.webpackConfig, formatterUtil.formatJsStr(webpackConfig.content));
      folder.file(commonFiles.packageJson, formatterUtil.formatJsonStr(packageJson.content));

      const sourceFolder = folder.folder(data.options.entryFolder || initialOptions.entryFolder.defaultValue);
      sourceFolder.file(`${data.options.entryFilename || initialOptions.entryFilename.defaultValue}.js`, '');
      if (data.options.htmlPlugin) {
        sourceFolder.file(`${data.options.htmlTemplate || initialOptions.htmlTemplate.defaultValue}.html`, '');
      }

      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, 'setapper.zip');
    },
  };
};

export default webpackBuilder;
