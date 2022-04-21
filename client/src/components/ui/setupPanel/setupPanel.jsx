import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { builderUtil } from '../../../utils/core';
import CodeBox from '../../common/codeBox';
import DownloadBtn from '../../common/downloadBtn';
import { builderConstants } from '../../../utils/constants';

function SetupPanel({ data }) {
  const { tool } = useParams();
  const buildingResult = builderUtil[tool](data);
  const [metaFile, setMetaFile] = useState(buildingResult.metaFiles.default);
  const [setupFile, setSetupFile] = useState(buildingResult.setupFiles.default);

  useEffect(() => {
    setMetaFile(() => buildingResult.metaFiles.default);
    setSetupFile(() => buildingResult.setupFiles.default);
  }, [tool]);

  const handleMetaFileChange = (newFile) => {
    setMetaFile(() => newFile);
  };

  const handleSetupFileChange = (newFile) => {
    setSetupFile(() => newFile);
  };

  return buildingResult && metaFile && setupFile ? (
    <div className="flex flex-1 flex-col space-y-2.5">
      {buildingResult.setupFiles[setupFile] && (
        <CodeBox
          code={buildingResult.setupFiles[setupFile].content}
          language={buildingResult.setupFiles[setupFile].language}
          onChange={handleSetupFileChange}
          selectedOption={setupFile}
          options={buildingResult.setupFiles.list}
        />
      )}
      {buildingResult.metaFiles[metaFile] && (
        <CodeBox
          code={buildingResult.metaFiles[metaFile].content}
          language={buildingResult.metaFiles[metaFile].language}
          onChange={handleMetaFileChange}
          selectedOption={metaFile}
          options={buildingResult.metaFiles.list}
        />
      )}
      {builderConstants[tool].PRODUCTION && (
        <div className="flex flex-col">
          <DownloadBtn data={data} label="Download setup" folderName={`${tool}-setup`} />
        </div>
      )}
    </div>
  ) : null;
}

SetupPanel.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SetupPanel;
