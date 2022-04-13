import { builderConstants } from '../../constants';

const buildSetapperJson = (data) => {
  return { content: JSON.stringify(data), language: 'json' };
};

const buildInstructionTxt = () => ({ content: 'gulp', language: 'txt' });

const buildStructureJson = (options, initialOptions) => {
  // const commonFiles = builderConstants.common.FILES;
  // const webpackFiles = builderConstants.webpack.FILES;
  console.log(options, initialOptions);

  const content = `
  {
    "root":{}
  }
  `;

  return { content, language: 'json' };
};

const buildGulpConfig = (options, initialOptions) => {
  console.log(options, initialOptions);
  const content = `const path=require('path')`;

  return { content, language: 'javascript' };
};

const buildPackageJson = (data, initialOptions) => {
  const { title, version, options } = data;
  console.log(options, initialOptions);

  const content = `
  {
    "name":"${title}",
    "version":"${version || '1.0.0'}",
    "private":true,
    "devDependencies":{
      "gulp":"^5.70.0"
    }
  }
  `;

  return { content, language: 'json' };
};

const gulpBuilder = (data) => {
  const commonFiles = builderConstants.common.FILES;
  const gulpFiles = builderConstants.gulp.FILES;
  const initialOptions = builderConstants.gulp.OPTIONS;

  const setapperJson = buildSetapperJson(data);
  const instructionTxt = buildInstructionTxt();
  const structureJson = buildStructureJson(data.options, initialOptions);

  const gulpConfig = buildGulpConfig(data.options, initialOptions);
  const packageJson = buildPackageJson(data, initialOptions);

  return {
    metaFiles: {
      default: commonFiles.setapperJson,
      list: [commonFiles.setapperJson, commonFiles.instructionTxt, commonFiles.structureJson],
      [commonFiles.setapperJson]: setapperJson,
      [commonFiles.instructionTxt]: instructionTxt,
      [commonFiles.structureJson]: structureJson,
    },
    setupFiles: {
      default: gulpFiles.gulpConfig,
      list: [gulpFiles.gulpConfig, commonFiles.packageJson],
      [gulpFiles.gulpConfig]: gulpConfig,
      [commonFiles.packageJson]: packageJson,
    },
  };
};

export default gulpBuilder;
