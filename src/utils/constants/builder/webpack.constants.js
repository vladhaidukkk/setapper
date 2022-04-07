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
      // +-
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
      description: 'A path to an HTML file which will be taken as a template for your bundled HTML',
      dataType: 'string',
      defaultValue: 'src/index.html',
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
      dataType: 'boolean',
      defaultValue: false,
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
    manifestPlugin: {
      label: 'Manifest plugin',
      description: 'This plugin create a manifest file with info about output folder',
      dataType: 'boolean',
      defaultValue: false,
    },
    robotstxtPlugin: {
      label: 'Robotstxt plugin',
      description: 'This plugin create a robot.txt file with info for Browsers',
      dataType: 'boolean',
      defaultValue: false,
    },
  },
};

export default webpackConstants;
