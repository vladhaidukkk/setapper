import { builderConstants } from 'utils/constants';

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

const buildEslintConfig = (options, initialOptions) => {
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
      "eslint":"^8.0.0"
    }
  }
  `;

  return { content, language: 'json' };
};

const eslintBuilder = (data) => {
  const commonFiles = builderConstants.common.FILES;
  const eslintFiles = builderConstants.eslint.FILES;
  const initialOptions = builderConstants.eslint.OPTIONS;

  const setapperJson = buildSetapperJson(data);
  const instructionTxt = buildInstructionTxt();
  const structureJson = buildStructureJson(data.options, initialOptions);

  const eslintConfig = buildEslintConfig(data.options, initialOptions);
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
      default: eslintFiles.eslintConfig,
      list: [eslintFiles.eslintConfig, commonFiles.packageJson],
      [eslintFiles.eslintConfig]: eslintConfig,
      [commonFiles.packageJson]: packageJson,
    },
  };
};

export default eslintBuilder;
