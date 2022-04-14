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
  const stylelintFiles = builderConstants.stylelint.FILES;

  const content = `
  {
    "root":{
      "files":[
        "${stylelintFiles.stylelintConfig}",
        "${commonFiles.packageJson}"
      ]
    }
  }
  `;

  return { content, language: 'json' };
};

const buildStylelintConfig = () => {
  const content = `module.exports={}`;

  return { content, language: 'javascript' };
};

const buildPackageJson = (data) => {
  const { title, version } = data;

  const content = `
  {
    "name":"${title}",
    "version":"${version}",
    "private":true,
    "devDependencies":{
      "stylelint":"^16.4.1"
    }
  }
  `;

  return { content, language: 'json' };
};

const stylelintBuilder = (data) => {
  const commonFiles = builderConstants.common.FILES;
  const stylelintFiles = builderConstants.stylelint.FILES;
  // const initialOptions = builderConstants.stylelint.OPTIONS;

  const setapperJson = buildSetapperJson(data);
  const instructionJson = buildInstructionJson();
  const structureJson = buildStructureJson();

  const stylelintConfig = buildStylelintConfig();
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
      default: stylelintFiles.stylelintConfig,
      list: [stylelintFiles.stylelintConfig, commonFiles.packageJson],
      [stylelintFiles.stylelintConfig]: stylelintConfig,
      [commonFiles.packageJson]: packageJson,
    },
    download: async () => {
      const zip = new JSZip();

      const folder = zip.folder('stylelint-setup');
      folder.file(stylelintFiles.stylelintConfig, formatterUtil.formatJsStr(stylelintConfig.content));
      folder.file(commonFiles.packageJson, formatterUtil.formatJsonStr(packageJson.content));

      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, 'setapper.zip');
    },
  };
};

export default stylelintBuilder;
