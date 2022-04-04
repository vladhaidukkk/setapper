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
    entryFile: {
      // done
      label: 'Entry file name',
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
    outputFile: {
      // done
      label: 'Output file name',
      description: 'Name of the file with bundled JavaScript code',
      dataType: 'string',
      defaultValue: 'main',
      required: true,
    },
    hashOutputFiles: {
      // +-
      label: 'Hash output file names',
      description: 'Should output file names be hashed to prevent caching',
      dataType: 'boolean',
      defaultValue: false,
    },
    cleanOutput: {
      // done
      label: 'Clean output folder',
      description: 'Should output folder be empty before new bundled code',
      dataType: 'boolean',
      defaultValue: true,
    },
    devServer: {
      label: 'Connect DevServer',
      description: 'Enable regime of live-coding with in-time page reloading',
      dataType: 'boolean',
      defaultValue: true,
    },
    devServerPort: {
      label: 'DevServer port',
      description: 'Name of the port on which your DevServer should run',
      dataType: 'number',
      defaultValue: 3000,
    },
    devServerOpen: {
      label: 'Open DevServer',
      description: 'Should Browser be opened after you start your DevServer',
      dataType: 'boolean',
      defaultValue: true,
    },
    optimization: {
      label: 'Optimize code',
      description: 'Should webpack optimize source code for production',
      dataType: 'boolean',
      defaultValue: false,
    },
    devTools: {
      label: 'Enable DevTools',
      description: 'Add map files for your bundled code which help in debugging',
      dataType: 'boolean',
      defaultValue: false,
    },
    htmlPlugin: {
      label: 'Add HTML plugin',
      description: 'This plugin create an html file in the output folder according to certain rules',
      dataType: 'boolean',
      defaultValue: true,
    },
    htmlPluginTemplate: {
      label: 'HTML template path',
      description: 'A path to the HTML file which will be taken as a template for your bundled HTML',
      dataType: 'string',
      defaultValue: 'src/index.html',
    },
  },
};

export default webpackConstants;
