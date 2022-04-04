import prettier from 'prettier/standalone';
import babelParser from 'prettier/parser-babel';

const formatJsStr = (str) => {
  return prettier.format(str, {
    parser: 'babel',
    plugins: [babelParser],
    printWidth: 60,
  });
};

const formatJsonStr = (str) => {
  return JSON.stringify(JSON.parse(str), null, 2);
};

const formatterUtil = {
  formatJsStr,
  formatJsonStr,
};

export default formatterUtil;
