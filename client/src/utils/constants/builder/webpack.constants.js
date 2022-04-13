const webpackConstants = {
  FILES: {
    webpackConfig: 'webpack.config.js',
    postcssConfig: 'postcss.config.js',
    babelConfig: 'babel.config.js',
  },
  OPTIONS: {
    entryFolder: {
      // done
      label: 'Entry folder name',
      description: 'Name of the folder with source code',
      dataType: 'string',
      defaultValue: 'src',
      required: true,
    },
    entryFilename: {
      // done
      label: 'Entry filename',
      description: 'Name of the main JavaScript file',
      dataType: 'string',
      defaultValue: 'index',
      required: true,
    },
    outputFolder: {
      // done
      label: 'Output folder name',
      description: 'Name of the folder with bundled code',
      dataType: 'string',
      defaultValue: 'dist',
      required: true,
    },
    outputFilename: {
      // done
      label: 'Output filename',
      description: 'Name of the file with bundled JavaScript code',
      dataType: 'string',
      defaultValue: 'main',
      required: true,
    },
    hashOutputFilenames: {
      // done +-
      label: 'Hash output filenames',
      description: 'Should output filenames be hashed to prevent caching',
      dataType: 'boolean',
      defaultValue: false,
    },
    cleanOutputFolder: {
      // done
      label: 'Clean output folder',
      description: 'Should output folder be cleaned before new bundle',
      dataType: 'boolean',
      defaultValue: true,
    },
    enableDevServer: {
      // noooo
      label: 'Enable DevServer',
      description: 'Enable mode of live-coding with page reloading after changes',
      dataType: 'boolean',
      defaultValue: true,
    },
    devServerPort: {
      // done
      label: 'DevServer port',
      description: 'Number of the port on which your DevServer should run',
      dataType: 'number',
      defaultValue: 3000,
      required: true,
    },
    openDevServer: {
      // done
      label: 'Open DevServer',
      description: 'Should Browser be opened after you start your DevServer',
      dataType: 'boolean',
      defaultValue: true,
    },
    optimizeCode: {
      // done
      label: 'Optimize code',
      description: 'Should webpack optimize your bundled code',
      dataType: 'boolean',
      defaultValue: false,
    },
    envOptimization: {
      // done
      label: 'Environment optimization',
      description: 'Should webpack optimize code depending on environment mode',
      dataType: 'boolean',
      defaultValue: false,
    },
    enableDevTools: {
      // done
      label: 'Enable DevTools',
      description: 'Add map files to your bundled files what helps in debugging',
      dataType: 'boolean',
      defaultValue: false,
    },
    htmlPlugin: {
      // done
      label: 'HTML plugin',
      description: 'This plugin create an HTML file in the output folder',
      dataType: 'boolean',
      defaultValue: true,
    },
    htmlTitle: {
      // done
      label: 'HTML title',
      description: 'A title of your HTML file',
      dataType: 'string',
      defaultValue: '',
    },
    htmlTemplate: {
      // done
      label: 'HTML template',
      description: 'A path to an HTML file which will be taken as a template for your bundled HTML',
      dataType: 'string',
      defaultValue: 'src/index.html',
      required: true,
    },
    cssPlugin: {
      // done
      label: 'CSS plugin',
      description: 'This plugin create a CSS file in the output folder',
      dataType: 'boolean',
      defaultValue: false,
    },
    cssFilename: {
      // done
      label: 'CSS filename',
      description: 'Name of the file with bundled CSS code',
      dataType: 'string',
      defaultValue: 'main',
      required: true,
    },
    eslintPlugin: {
      label: 'Eslint plugin',
      description: 'This plugin enables Eslint for your source files',
      dataType: 'boolean',
      defaultValue: false,
    },
    stylelintPlugin: {
      label: 'Stylelint plugin',
      description: 'This plugin enables Stylelint for your source files',
      dataType: 'boolean',
      defaultValue: false,
    },
    dotenvPlugin: {
      label: 'Dotenv plugin',
      description: 'This plugin allows to use environment variables in JavaScript',
      dataType: 'boolean',
      defaultValue: false,
    },
    htmlLoader: {
      label: 'HTML loader',
      description: 'This loader add all images and other files from HTML files into output folder',
      dataType: 'boolean',
      defaultValue: false,
    },
    cssLoader: {
      label: 'CSS loader',
      description: 'This loader allows you to import CSS in JS',
      dataType: 'boolean',
      defaultValue: true,
    },
    postcssLoader: {
      label: 'PostCSS loader',
      description: 'This loader connect PostCSS into your project',
      dataType: 'boolean',
      defaultValue: false,
    },
    postcssEnvPreset: {
      label: 'PostCSS env preset',
      description: 'Add postcss env preset into PostCSS configuration',
      dataType: 'boolean',
      defaultValue: false,
    },
    sassLoader: {
      label: 'Sass loader',
      description: 'This loader enable Sass in your project',
      dataType: 'boolean',
      defaultValue: false,
    },
    lessLoader: {
      label: 'Less loader',
      description: 'This loader connect Less into your project',
      dataType: 'boolean',
      defaultValue: false,
    },
    babelLoader: {
      label: 'Babel loader',
      description: 'This loader add Babel into your project',
      dataType: 'boolean',
      defaultValue: true,
    },
    reactPreset: {
      label: 'React preset',
      description: 'Add React preset to Babel which allow to use Jsx',
      dataType: 'boolean',
      defaultValue: false,
    },
    typescriptPreset: {
      label: 'TypeScript preset',
      description: 'Add TypeScript preset to Babel which allow to use this language',
      dataType: 'boolean',
      defaultValue: false,
    },
    xmlLoader: {
      label: 'XML loader',
      description: 'This loader allows you to import XML in JS',
      dataType: 'boolean',
      defaultValue: false,
    },
    imagesLoader: {
      label: 'Images loader',
      description: 'This loader allows you to import images in JS',
      dataType: 'boolean',
      defaultValue: true,
    },
    fontsLoader: {
      label: 'Fonts loader',
      description: 'This loader allows you to import fonts in JS',
      dataType: 'boolean',
      defaultValue: false,
    },
    splitConfigs: {
      label: 'Split config files',
      description: 'Move babel and other configs into separate files',
      dataType: 'boolean',
      defaultValue: false,
    },
  },
};

export default webpackConstants;
