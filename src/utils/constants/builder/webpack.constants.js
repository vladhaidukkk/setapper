const webpackConstants = {
  filenames: {
    CONFIG: 'webpack.config.js',
  },
  CONFIG_NAME: 'webpack.config.js',
  OPTIONS: {
    entryFolder: {
      // done
      label: 'Entry folder name',
      description: 'Name of the folder with source code',
      defaultValue: 'src',
      required: true,
    },
    entryFile: {
      // done
      label: 'Entry file name',
      description: 'Name of the main JavaScript file',
      defaultValue: 'index',
      required: true,
    },
    outputFolder: {
      // done
      label: 'Output folder name',
      description: 'Name of the folder with bundled code',
      defaultValue: 'dist',
      required: true,
    },
    outputFile: {
      // done
      label: 'Output file name',
      description: 'Name of the file with bundled JavaScript code',
      defaultValue: 'main',
      required: true,
    },
    hashOutputFiles: {
      // +-
      label: 'Hash output file names',
      description: 'Should output file names be hashed to prevent caching',
      defaultValue: false,
    },
    cleanOutput: {
      // done
      label: 'Clean output folder',
      description: 'Should output folder be empty before new bundled code',
      defaultValue: true,
    },
    devServer: {
      label: 'Connect DevServer',
      description: 'Enable regime of live-coding with in-time page reloading',
      defaultValue: true,
    },
    devServerPort: {
      label: 'DevServer port',
      description: 'Name of the port on which your DevServer should run',
      defaultValue: 3000,
    },
    devServerOpen: {
      label: 'Open DevServer',
      description: 'Should Browser be opened after you start your DevServer',
      defaultValue: true,
    },
    optimization: {
      label: 'Optimize code',
      description: 'Should webpack optimize source code for production',
      defaultValue: false,
    },
    devTools: {
      label: 'Enable DevTools',
      description: 'Add map files for your bundled code which help in debugging',
      defaultValue: false,
    },
    htmlPlugin: {
      label: 'Add HTML plugin',
      description: 'This plugin create an html file in the output folder according to certain rules',
      defaultValue: true,
    },
    htmlPluginTemplate: {
      label: 'HTML template path',
      description: 'A path to the HTML file which will be taken as a template for your bundled HTML',
      defaultValue: 'src/index.html',
    },
  },
};

export default webpackConstants;
