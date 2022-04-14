import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { builderConstants } from '../../constants';
import formatterUtil from '../formatter.util';

const buildSetapperJson = (data) => {
  return { content: JSON.stringify(data), language: 'json' };
};

const buildInstructionJson = () => {
  const content = `
  {
    "start":"To start development download setup",
    "preparation":"Before coding download all dependencies using (npm install) or (yarn install)",
    "commands":{},
    "commandsHelp":"If you use npm you can run commands using (npm run command-name), if yarn (yarn command-name)"
  }
  `;

  return { content, language: 'json' };
};

const buildStructureJson = () => {
  const commonFiles = builderConstants.common.FILES;
  const eslintFiles = builderConstants.eslint.FILES;

  const content = `
  {
    "root":{
      "files":[
        "${eslintFiles.eslintConfig}",
        "${commonFiles.packageJson}"
      ]
    }
  }
  `;

  return { content, language: 'json' };
};

const buildEslintConfig = () => {
  const content = `module.exports={}`;

  return { content, language: 'javascript' };
};

const buildPackageJson = (data) => {
  const { title, version } = data;

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
  // const initialOptions = builderConstants.eslint.OPTIONS;

  const setapperJson = buildSetapperJson(data);
  const instructionJson = buildInstructionJson();
  const structureJson = buildStructureJson();

  const eslintConfig = buildEslintConfig();
  const packageJson = buildPackageJson(data);

  return {
    metaFiles: {
      default: commonFiles.setapperJson,
      list: [commonFiles.setapperJson, commonFiles.instructionJson, commonFiles.structureJson],
      [commonFiles.setapperJson]: setapperJson,
      [commonFiles.instructionJson]: instructionJson,
      [commonFiles.structureJson]: structureJson,
    },
    setupFiles: {
      default: eslintFiles.eslintConfig,
      list: [eslintFiles.eslintConfig, commonFiles.packageJson],
      [eslintFiles.eslintConfig]: eslintConfig,
      [commonFiles.packageJson]: packageJson,
    },
    download: async () => {
      const zip = new JSZip();

      const folder = zip.folder('eslint-setup');
      folder.file(eslintFiles.eslintConfig, formatterUtil.formatJsStr(eslintConfig.content));
      folder.file(commonFiles.packageJson, formatterUtil.formatJsonStr(packageJson.content));

      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, 'setapper.zip');
    },
  };
};

export default eslintBuilder;
