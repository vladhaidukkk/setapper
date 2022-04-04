import React from 'react';
import Code from 'components/common/codeBox/code/code';
import { formatterUtil } from 'utils/core';
import PropTypes from 'prop-types';

function CodeBox({ language, code, header }) {
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
    <div className="overflow-hidden rounded-md border border-stone-300 shadow-sm dark:border-stone-700">
      {header && header}
      <Code content={getFormattedCode()} language={language} />
    </div>
  );
}

CodeBox.defaultProps = {
  header: undefined,
};

CodeBox.propTypes = {
  language: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  header: PropTypes.node,
};

export default CodeBox;
