import React from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SetupPanel from '../../ui/presetPanel';
import DetailInfo from '../../ui/detailInfo';
import { getPresetById } from '../../../store/presets/presets.selectors';

function PresetViewer() {
  const { presetId } = useParams();
  const preset = useSelector(getPresetById(presetId));

  return (
    <div className="grid flex-1 grid-cols-12 gap-x-2.5 py-2.5 px-3.5 pb-0">
      <div className="col-span-7 flex flex-col space-y-2.5 overflow-y-auto">
        <h2 className="text-2xl font-medium text-black dark:text-white">{preset.title}</h2>
        <p className="text-lg text-stone-800 dark:text-stone-200">{preset.description}</p>
        <div className="flex space-x-2.5">
          <DetailInfo label="version:" value={preset.version} />
          <DetailInfo label="created:" value={moment(preset.createdAt).format('MMM Do YY')} />
          <DetailInfo label="modified:" value={moment(preset.updatedAt).format('MMM Do YY')} />
        </div>
        {/* <div className="space-y-2.5"> */}
        {/*  <h3 className="text-lg font-medium">Leave a comment</h3> */}
        {/*  <Form onSubmit={handleSubmit(handleFormSubmit)} register={register}> */}
        {/*    <TextField label="Title" name="title" /> */}
        {/*    <TextareaField label="Description" name="description" /> */}
        {/*    <SubmitBtn>Add hint</SubmitBtn> */}
        {/*  </Form> */}
        {/*  <div /> */}
        {/* </div> */}
      </div>
      <div className="col-span-5 -mx-2.5 flex flex-col overflow-y-auto p-2.5 pt-0">
        <SetupPanel data={preset} />
      </div>
    </div>
  );
}

export default PresetViewer;
