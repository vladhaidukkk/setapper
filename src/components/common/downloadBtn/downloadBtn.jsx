import React from 'react';
import PropTypes from 'prop-types';
import JSZip from 'jszip';
import { useParams } from 'react-router-dom';
import { builderUtil } from 'utils/core';
import { builderConstants } from 'utils/constants';
import { saveAs } from 'file-saver';

function DownloadBtn({ data, label }) {
  const { tool } = useParams();

  const handleDownload = async () => {
    const buildingResult = builderUtil[tool](data);
    const zip = new JSZip();
    zip.file(
      builderConstants[tool].FILES.webpackConfig,
      buildingResult.setupFiles[builderConstants[tool].FILES.webpackConfig].content
    );
    const content = await zip.generateAsync({ type: 'blob' });
    saveAs(content, 'ddd.zip');
  };

  return (
    <button
      type="button"
      className="flex w-full justify-center rounded-md border border-indigo-600 bg-indigo-500 py-1.5
              px-4 text-sm font-medium text-white shadow outline-none
              ring-offset-white transition-colors hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2
              dark:border-indigo-500 dark:bg-indigo-600 dark:ring-offset-stone-800 dark:hover:bg-indigo-500 dark:focus:bg-indigo-500 dark:focus:ring-indigo-500 md:text-base"
      onClick={handleDownload}
    >
      {label}
    </button>
  );
}

DownloadBtn.defaultProps = {
  label: 'Download',
};

DownloadBtn.propTypes = {
  data: PropTypes.object.isRequired,
  label: PropTypes.string,
};

export default DownloadBtn;
