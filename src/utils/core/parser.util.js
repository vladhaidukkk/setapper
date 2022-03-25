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

const parserUtil = {
  formatJsStr,
  formatJsonStr,
};

export default parserUtil;
