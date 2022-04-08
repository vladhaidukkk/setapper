import React from 'react';
import PropTypes from 'prop-types';

function ModalBtn({ onClick, color, children }) {
  const getClasses = () => {
    let classes =
      'flex flex-1 justify-center rounded-md border border-stone-300 bg-stone-100 px-2.5 py-1 text-sm text-stone-600 outline-none transition-colors duration-200 hover:text-white focus:text-white dark:border-stone-700 dark:bg-stone-900 dark:text-stone-400 dark:hover:text-white dark:focus:text-white';

    switch (color) {
      case 'indigo':
        classes +=
          ' hover:border-indigo-600 hover:bg-indigo-500 focus:border-indigo-600 focus:bg-indigo-500 dark:hover:border-indigo-500 dark:hover:bg-indigo-600 dark:focus:border-indigo-500 dark:focus:bg-indigo-600';
        break;
      case 'violet':
        classes +=
          ' hover:border-violet-600 hover:bg-violet-500 focus:border-violet-600 focus:bg-violet-500 dark:hover:border-violet-500 dark:hover:bg-violet-600 dark:focus:border-violet-500 dark:focus:bg-violet-600';
        break;
      case 'emerald':
        classes +=
          ' hover:border-emerald-600 hover:bg-emerald-500 focus:border-emerald-600 focus:bg-emerald-500 dark:hover:border-emerald-500 dark:hover:bg-emerald-600 dark:focus:border-emerald-500 dark:focus:bg-emerald-600';
        break;
      case 'rose':
        classes +=
          ' hover:border-rose-600 hover:bg-rose-500 focus:border-rose-600 focus:bg-rose-500 dark:hover:border-rose-500 dark:hover:bg-rose-600 dark:focus:border-rose-500 dark:focus:bg-rose-600';
        break;
      default:
        classes +=
          ' hover:border-indigo-600 hover:bg-indigo-500 focus:border-indigo-600 focus:bg-indigo-500 dark:hover:border-indigo-500 dark:hover:bg-indigo-600 dark:focus:border-indigo-500 dark:focus:bg-indigo-600';
    }

    return classes;
  };

  return (
    <button type="button" onClick={onClick} className={getClasses()}>
      {children}
    </button>
  );
}

ModalBtn.defaultProps = {
  color: 'indigo',
};

ModalBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

export default ModalBtn;
