import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSetupById } from 'store/setups/setups.selectors';
import SetupPanel from 'components/ui/setupPanel';
import moment from 'moment';
import SetupMenu from 'components/ui/setupMenu';
// import Form, { SubmitBtn, TextareaField, TextField } from 'components/common/form';
// import { useForm } from 'react-hook-form';
import DetailInfo from 'components/ui/detailInfo';

function SetupViewer() {
  const { setupId } = useParams();
  const setup = useSelector(getSetupById(setupId));

  // const { handleSubmit, register } = useForm();
  //
  // const handleFormSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <div className="grid flex-1 grid-cols-12 gap-x-2.5 py-2.5 px-3.5 pb-0">
      <div className="col-span-7 flex flex-col space-y-2.5 overflow-y-auto">
        <div className="flex items-start justify-between space-x-2.5">
          <h2 className="text-2xl font-medium text-black dark:text-white">{setup.title}</h2>
          <SetupMenu />
        </div>
        <p className="text-lg text-stone-800 dark:text-stone-200">{setup.description}</p>
        <div className="flex space-x-2.5">
          <DetailInfo label="version:" value={setup.version} />
          <DetailInfo label="created:" value={moment(setup.createdAt).format('MMM Do YY')} />
          <DetailInfo label="modified:" value={moment(setup.modifiedAt).format('MMM Do YY')} />
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
        <SetupPanel data={setup} />
      </div>
    </div>
  );
}

export default SetupViewer;
