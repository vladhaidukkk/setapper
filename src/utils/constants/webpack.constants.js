const webpackConstants = {
  OPTIONS: {
    entry: {
      isRequired: true,
      defValue: 'src/index.js',
    },
    outputPath: {
      isRequired: true,
      defValue: 'dist',
    },
    outputFilename: {
      isRequired: true,
      defValue: 'bundle.js',
    },
    clean: {
      isRequired: false,
      defValue: true,
    },
    optimization: {
      isRequired: false,
      defValue: false,
    },
  },
};

export default webpackConstants;
