import prettier from 'prettier/standalone';
import babelParser from 'prettier/parser-babel';

const formatJsStr = (str) => {
  return prettier.format(str, {
    parser: 'babel',
    plugins: [babelParser],
    printWidth: 60,
  });
};

const formatJsonToStr = (json) => {
  return JSON.stringify(json, null, 2);
};

const formatterUtil = {
  formatJsStr,
  formatJsonToStr,
};

export default formatterUtil;
