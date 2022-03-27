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
      <button type="button" className="rounded bg-sky-300 py-1 shadow" onClick={handleClick}>
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
