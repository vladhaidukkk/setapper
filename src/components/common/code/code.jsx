import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import prism from 'prismjs';
import 'prismjs/components/prism-json';
import 'components/common/code/code-theme.css';

function Code({ content, language }) {
  useEffect(() => {
    prism.highlightAll();
  });

  return (
    <div className="Code">
      <pre className="rounded-md border border-stone-300 shadow-sm dark:border-stone-700">
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
