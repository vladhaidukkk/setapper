import React, { useState } from 'react';
import { builderUtil } from 'utils/core';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import CodeBox from 'components/common/codeBox';
import DownloadBtn from 'components/common/downloadBtn';

function SetupPanel({ data }) {
  const { tool } = useParams();
  const buildingResult = builderUtil[tool](data);
  const [metaFile, setMetaFile] = useState(buildingResult.metaFiles.default);
  const [setupFile, setSetupFile] = useState(buildingResult.setupFiles.default);

  console.log(buildingResult);

  const handleMetaFileChange = (newFile) => {
    setMetaFile(() => newFile);
  };

  const handleSetupFileChange = (newFile) => {
    setSetupFile(() => newFile);
  };

  return (
    <div className="flex flex-col space-y-2.5">
      <CodeBox
        code={buildingResult.metaFiles[metaFile].content}
        language={buildingResult.metaFiles[metaFile].language}
        onChange={handleMetaFileChange}
        selectedOption={metaFile}
        options={buildingResult.metaFiles.list}
      />
      <CodeBox
        code={buildingResult.setupFiles[setupFile].content}
        language={buildingResult.setupFiles[setupFile].language}
        onChange={handleSetupFileChange}
        selectedOption={setupFile}
        options={buildingResult.setupFiles.list}
      />
      <div className="flex flex-col">
        <DownloadBtn data={data} label="Download setup" />
      </div>
    </div>
  );
}

SetupPanel.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SetupPanel;
