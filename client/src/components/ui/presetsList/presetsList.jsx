import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import PresetsHint from './presetsHint/presetsHint';
import Preset from './preset/preset';

function PresetsList({ list, matchString, notFound }) {
  const { tool } = useParams();

  const renderHint = () => {
    if (!tool) {
      return null;
    }
    if (notFound) {
      return <PresetsHint text="No presets found" />;
    }
    return <PresetsHint text="No presets for this tool" />;
  };

  return (
    <div className="flex grow flex-col overflow-y-auto">
      {list && list.length !== 0 ? (
        <ul className="flex grow flex-col space-y-2 overflow-y-auto">
          {list.map((item) => (
            <Preset key={item.id} {...item} matchString={matchString} />
          ))}
        </ul>
      ) : (
        renderHint()
      )}
    </div>
  );
}

PresetsList.defaultProps = {
  list: undefined,
  notFound: false,
};

PresetsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  matchString: PropTypes.string.isRequired,
  notFound: PropTypes.bool,
};

export default PresetsList;
