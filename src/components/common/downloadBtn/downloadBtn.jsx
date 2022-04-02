import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function DownloadBtn({ filename, content, contentType, label }) {
  const linkRef = useRef();

  const handleClick = () => {
    linkRef.current.click();
  };

  return (
    <>
      <a
        ref={linkRef}
        className="hidden"
        href={`data:${contentType};charset=utf-8,${encodeURIComponent(content)}`}
        download={filename}
      />

      <button
        type="button"
        className="flex w-full justify-center rounded-md border border-indigo-600 bg-indigo-500 py-1.5
              px-4 text-sm font-medium text-white shadow outline-none
              ring-offset-white transition-colors hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2
              dark:border-indigo-500 dark:bg-indigo-600 dark:ring-offset-stone-800 dark:hover:bg-indigo-500 dark:focus:bg-indigo-500 dark:focus:ring-indigo-500 md:text-base"
        onClick={handleClick}
      >
        {label}
      </button>
    </>
  );
}

DownloadBtn.defaultProps = {
  label: 'Download',
};

DownloadBtn.propTypes = {
  filename: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default DownloadBtn;
