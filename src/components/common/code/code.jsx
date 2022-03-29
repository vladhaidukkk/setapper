import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import prism from 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism-tomorrow.min.css';

function Code({ content, language }) {
  useEffect(() => {
    prism.highlightAll();
  });

  return (
    <div className="Code">
      <pre className="rounded-md bg-stone-900">
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
