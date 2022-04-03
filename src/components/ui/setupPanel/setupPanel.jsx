import React from 'react';
import Code from 'components/common/code';
import { builderUtil, formatterUtil } from 'utils/core';
import DownloadBtn from 'components/common/downloadBtn';
import { builderConstants } from 'utils/constants';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function SetupPanel({ data }) {
  const { tool } = useParams();

  return (
    <div className="flex flex-col space-y-2.5">
      <Code content={formatterUtil.formatJsonToStr(data)} language="json" />
      <Code content={formatterUtil.formatJsStr(builderUtil[tool](data.options))} language="javascript" />
      <div className="flex flex-col">
        <DownloadBtn
          filename={builderConstants[tool].filenames.CONFIG}
          content={formatterUtil.formatJsStr(builderUtil[tool](data.options))}
          contentType="text/javascript"
        />
      </div>
    </div>
  );
}

SetupPanel.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SetupPanel;
