import React from 'react';
import Code from 'components/common/codeBox/code/code';
import { formatterUtil } from 'utils/core';
import PropTypes from 'prop-types';
import CodeBoxOptionsList from 'components/common/codeBox/codeBoxOptionsList/codeBoxOptionsList';

function CodeBox({ language, code, options, selectedOption, onChange }) {
  const getFormattedCode = () => {
    let formattedCode;

    if (language === 'javascript') {
      formattedCode = formatterUtil.formatJsStr(code);
    } else if (language === 'json') {
      formattedCode = formatterUtil.formatJsonStr(code);
    } else {
      formattedCode = code;
    }

    return formattedCode;
  };

  return (
    <div className="flex-1 rounded-md border border-stone-300 shadow-sm dark:border-stone-700">
      <CodeBoxOptionsList onChange={onChange} selectedOption={selectedOption} options={options} />
      <Code content={getFormattedCode()} language={language} />
    </div>
  );
}

CodeBox.propTypes = {
  language: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CodeBox;
