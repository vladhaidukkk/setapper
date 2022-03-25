import React from 'react';
import prettier from 'prettier/standalone';
import babelParser from 'prettier/parser-babel';

// function syntaxHighlight(json) {
//   if (typeof json !== 'string') {
//     json = JSON.stringify(json, undefined, 2);
//   }
//   json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
//   return json.replace(
//     /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
//     (match) => {
//       let cls = 'text-red-300';
//       if (/^"/.test(match)) {
//         if (/:$/.test(match)) {
//           cls = 'text-green-300';
//         } else {
//           cls = 'text-blue-300';
//         }
//       } else if (/true|false/.test(match)) {
//         cls = 'text-violet-300';
//       } else if (/null/.test(match)) {
//         cls = 'text-gray-300';
//       }
//       return `<span class="${cls}">${match}</span>`;
//     }
//   );
// }

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

const strToJsx = (str, delimiter, elem) => {
  const splitRegex = new RegExp(`(${delimiter})`, 'gi');
  const insertRegex = new RegExp(delimiter, 'i');

  const parts = str.split(splitRegex);
  return parts.map((part, index) => {
    if (insertRegex.test(part)) {
      // eslint-disable-next-line react/no-array-index-key
      return React.cloneElement(elem, { key: index }, part);
    }
    return part;
  });
};

const parserUtil = {
  formatJsStr,
  formatJsonStr,
  strToJsx,
};

export default parserUtil;
