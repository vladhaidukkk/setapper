import React, { useEffect, useState } from 'react';
import { builderUtil } from 'utils/core';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import CodeBox from 'components/common/codeBox';
import DownloadBtn from 'components/common/downloadBtn';

function SetupPanel({ data }) {
  const { tool } = useParams();
  const [buildingResult, setBuildingResult] = useState(null);
  const [metaFile, setMetaFile] = useState(null);
  const [setupFile, setSetupFile] = useState(null);

  useEffect(() => {
    const result = builderUtil[tool](data);
    setBuildingResult(result);
    setMetaFile(result.metaFiles.default);
    setSetupFile(result.setupFiles.default);
  }, [tool]);

  const handleMetaFileChange = (newFile) => {
    setMetaFile(() => newFile);
  };

  const handleSetupFileChange = (newFile) => {
    setSetupFile(() => newFile);
  };

  return buildingResult ? (
    <div className="flex flex-1 flex-col space-y-2.5">
      <CodeBox
        code={buildingResult.setupFiles[setupFile].content}
        language={buildingResult.setupFiles[setupFile].language}
        onChange={handleSetupFileChange}
        selectedOption={setupFile}
        options={buildingResult.setupFiles.list}
      />
      <CodeBox
        code={buildingResult.metaFiles[metaFile].content}
        language={buildingResult.metaFiles[metaFile].language}
        onChange={handleMetaFileChange}
        selectedOption={metaFile}
        options={buildingResult.metaFiles.list}
      />
      <div className="flex flex-col">
        <DownloadBtn data={data} label="Download setup" />
      </div>
    </div>
  ) : null;
}

SetupPanel.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SetupPanel;
