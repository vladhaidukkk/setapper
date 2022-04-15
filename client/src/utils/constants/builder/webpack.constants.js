const webpackConstants = {
  PRODUCTION: true,
  FILES: {
    webpackConfig: 'webpack.config.js',
  },
  OPTIONS: {
    entryFolder: {
      label: 'Entry folder name',
      description: 'Name of the folder with source code',
      dataType: 'string',
      defaultValue: 'src',
      required: true,
    },
    entryFilename: {
      label: 'Entry filename',
      description: 'Name of the main JavaScript file',
      dataType: 'string',
      defaultValue: 'index',
      required: true,
    },
    outputFolder: {
      label: 'Output folder name',
      description: 'Name of the folder with bundled code',
      dataType: 'string',
      defaultValue: 'dist',
      required: true,
    },
    outputFilename: {
      label: 'Output filename',
      description: 'Name of the file with bundled JavaScript code',
      dataType: 'string',
      defaultValue: 'main',
      required: true,
    },
    hashOutputFilenames: {
      label: 'Hash output filenames',
      description: 'Should output filenames be hashed to prevent caching',
      dataType: 'boolean',
      defaultValue: false,
    },
    cleanOutputFolder: {
      label: 'Clean output folder',
      description: 'Should output folder be cleaned before new bundle',
      dataType: 'boolean',
      defaultValue: true,
    },
    enableDevServer: {
      label: 'Enable DevServer',
      description: 'Enable mode of live-coding with page reloading after changes',
      dataType: 'boolean',
      defaultValue: true,
    },
    devServerPort: {
      label: 'DevServer port',
      description: 'Number of the port on which your DevServer should run',
      dataType: 'number',
      defaultValue: 3000,
      required: true,
    },
    openDevServer: {
      label: 'Open DevServer',
      description: 'Should Browser be opened after you start your DevServer',
      dataType: 'boolean',
      defaultValue: true,
    },
    optimizeCode: {
      label: 'Optimize code',
      description: 'Should webpack optimize your bundled code',
      dataType: 'boolean',
      defaultValue: false,
    },
    envOptimization: {
      label: 'Environment optimization',
      description: 'Should webpack optimize code depending on environment mode',
      dataType: 'boolean',
      defaultValue: false,
    },
    enableDevTools: {
      label: 'Enable DevTools',
      description: 'Add map files to your bundled files what helps in debugging',
      dataType: 'boolean',
      defaultValue: false,
    },
    htmlPlugin: {
      label: 'HTML plugin',
      description: 'This plugin create an HTML file in the output folder',
      dataType: 'boolean',
      defaultValue: true,
    },
    htmlTitle: {
      label: 'HTML title',
      description: 'A title of your HTML file',
      dataType: 'string',
      defaultValue: '',
    },
    htmlTemplate: {
      label: 'HTML template',
      description: 'Name of the HTML file which will be taken as a template for your bundled HTML',
      dataType: 'string',
      defaultValue: 'index',
      required: true,
    },
    cssPlugin: {
      label: 'CSS plugin',
      description: 'This plugin create a CSS file in the output folder',
      dataType: 'boolean',
      defaultValue: false,
    },
    cssFilename: {
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
  },
};

export default webpackConstants;