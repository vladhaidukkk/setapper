import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import prism from 'prismjs';
import 'prismjs/components/prism-json';
import 'components/common/codeBox/code/code-theme.css';

function Code({ content, language }) {
  useEffect(() => {
    prism.highlightAll();
  });

  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{content}</code>
      </pre>
    </div>
  );
}

Code.propTypes = {
  content: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default Code;
