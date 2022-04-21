import prettier from 'prettier/standalone';
import babelParser from 'prettier/parser-babel';

const formatJsStr = (str) => {
  return prettier.format(str, {
    parser: 'babel',
    plugins: [babelParser],
    printWidth: 80,
    singleQuote: true,
    semi: true,
    trailingComma: 'es5',
    tabWidth: 2,
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
