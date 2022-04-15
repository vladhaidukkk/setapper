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
  const prettierFiles = builderConstants.prettier.FILES;

  const content = `
  {
    "root":{
      "files":[
        "${prettierFiles.prettierConfig}",
        "${commonFiles.packageJson}"
      ]
    }
  }
  `;

  return { content, language: 'json' };
};

const buildPrettierConfig = () => {
  const content = `{}`;

  return { content, language: 'json' };
};

const buildPackageJson = (data) => {
  const { title, version } = data;

  const content = `
  {
    "name":"${title}",
    "version":"${version}",
    "private":true,
    "devDependencies":{
      "stylelint":"^2.6.2"
    }
  }
  `;

  return { content, language: 'json' };
};

const prettierBuilder = (data) => {
  const commonFiles = builderConstants.common.FILES;
  const prettierFiles = builderConstants.prettier.FILES;
  // const initialOptions = builderConstants.prettier.OPTIONS;

  const setapperJson = buildSetapperJson(data);
  const instructionJson = buildInstructionJson();
  const structureJson = buildStructureJson();

  const prettierConfig = buildPrettierConfig();
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
      default: prettierFiles.prettierConfig,
      list: [prettierFiles.prettierConfig, commonFiles.packageJson],
      [prettierFiles.prettierConfig]: prettierConfig,
      [commonFiles.packageJson]: packageJson,
    },
    download: async (folderName) => {
      const zip = new JSZip();

      const folder = zip.folder(folderName || 'prettier-setup');
      folder.file(prettierFiles.prettierConfig, formatterUtil.formatJsonStr(prettierConfig.content));
      folder.file(commonFiles.packageJson, formatterUtil.formatJsonStr(packageJson.content));

      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, 'setapper.zip');
    },
  };
};

export default prettierBuilder;
