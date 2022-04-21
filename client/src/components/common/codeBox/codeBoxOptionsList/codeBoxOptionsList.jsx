import React from 'react';
import PropTypes from 'prop-types';
import CodeBoxOption from '../codeBoxOption/codeBoxOption';

function CodeBoxOptionsList({ selectedOption, options, onChange }) {
  return (
    <div className="flex space-x-1.5 rounded-t-md border-b border-stone-300 bg-stone-100 p-1.5 dark:border-stone-700 dark:bg-stone-900">
      {options.map((option) => {
        return <CodeBoxOption key={option} isSelected={selectedOption === option} text={option} onClick={onChange} />;
      })}
    </div>
  );
}

CodeBoxOptionsList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CodeBoxOptionsList;
