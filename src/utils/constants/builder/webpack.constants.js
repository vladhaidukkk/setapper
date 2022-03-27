const webpackConstants = {
  filenames: {
    CONFIG: 'webpack.config.js',
  },
  CONFIG_NAME: 'webpack.config.js',
  OPTIONS: {
    entry: {
      label: 'Entry point:',
      description: '',
      defaultValue: 'src/index.js',
    },
    outputPath: {
      label: 'Output folder path:',
      description: '',
      defaultValue: 'dist',
    },
    outputFilename: {
      label: 'Output file name:',
      description: '',
      defaultValue: 'bundle.js',
    },
    clean: {
      label: 'Clean output folder:',
      description: '',
      defaultValue: true,
    },
    optimization: {
      label: 'Optimize application:',
      description: '',
      defaultValue: false,
    },
    cssLoader: {
      label: 'Allow importing CSS:',
      description: '',
      defaultValue: true,
    },
    sassLoader: {
      label: 'Allow using Sass(SCSS):',
      description: '',
      defaultValue: false,
    },
  },
};

export default webpackConstants;
