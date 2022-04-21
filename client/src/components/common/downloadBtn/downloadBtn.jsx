import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { builderUtil } from '../../../utils/core';

function DownloadBtn({ data, label, folderName }) {
  const { tool } = useParams();

  const handleDownload = async () => {
    const buildingResult = builderUtil[tool](data);
    await buildingResult.download(folderName);
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
  folderName: undefined,
};

DownloadBtn.propTypes = {
  data: PropTypes.object.isRequired,
  label: PropTypes.string,
  folderName: PropTypes.string,
};

export default DownloadBtn;
