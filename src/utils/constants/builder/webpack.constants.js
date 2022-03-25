const webpackConstants = {
  OPTIONS: {
    entry: {
      label: '',
      description: '',
      defaultValue: 'src/index.js',
    },
    outputPath: {
      label: '',
      description: '',
      defaultValue: 'dist',
    },
    outputFilename: {
      label: '',
      description: '',
      defaultValue: 'bundle.js',
    },
    clean: {
      label: '',
      description: '',
      defaultValue: true,
    },
    optimization: {
      label: '',
      description: '',
      defaultValue: false,
    },
    cssLoader: {
      label: '',
      description: '',
      defaultValue: true,
    },
    sassLoader: {
      label: '',
      description: '',
      defaultValue: false,
    },
  },
};

export default webpackConstants;
