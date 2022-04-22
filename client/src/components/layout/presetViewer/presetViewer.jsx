import React from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isDesktop } from 'react-device-detect';
import SetupPanel from '../../ui/presetPanel';
import DetailInfo from '../../ui/detailInfo';
import { getPresetById } from '../../../store/presets/presets.selectors';
import PresetComments from '../../ui/presetComments';

function PresetViewer() {
  const { presetId } = useParams();
  const preset = useSelector(getPresetById(presetId));

  return (
    <div className="grid flex-1 grid-cols-12 gap-x-2.5 p-2.5 pb-0">
      <div
        className={`flex touch-manipulation flex-col space-y-2.5 overflow-y-auto px-1 pb-2.5 ${
          isDesktop ? 'col-span-7' : 'col-span-12'
        }`}
      >
        <h2 className="text-2xl font-medium text-black dark:text-white">{preset.title}</h2>
        <p className="text-lg text-stone-800 dark:text-stone-200">{preset.description}</p>
        <div className="flex space-x-2.5">
          <DetailInfo label="version:" value={preset.version} />
          <DetailInfo label="created:" value={moment(preset.createdAt).format('MMM Do YY')} />
          <DetailInfo label="modified:" value={moment(preset.updatedAt).format('MMM Do YY')} />
        </div>
        <PresetComments />
      </div>
      {isDesktop && (
        <div className="col-span-5 -mx-2.5 flex touch-manipulation flex-col overflow-y-auto p-2.5 pt-0">
          <SetupPanel data={preset} />
        </div>
      )}
    </div>
  );
}

export default PresetViewer;
