import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { getSetupById } from '../../../store/setups/setups.selectors';
import SetupPanel from '../../ui/setupPanel';
import SetupMenu from '../../ui/setupMenu';
import DetailInfo from '../../ui/detailInfo';
import Form, { SubmitBtn, TextareaField } from '../../common/form';

function SetupViewer() {
  const { setupId } = useParams();
  const setup = useSelector(getSetupById(setupId));

  const { handleSubmit, register } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="grid flex-1 grid-cols-12 gap-x-2.5 py-2.5 px-3.5 pb-0">
      <div className="col-span-7 flex flex-col space-y-2.5 overflow-y-auto px-1">
        <div className="flex items-start justify-between space-x-2.5">
          <h2 className="text-2xl font-medium text-black dark:text-white">{setup.title}</h2>
          <SetupMenu />
        </div>
        <p className="text-lg text-stone-800 dark:text-stone-200">{setup.description}</p>
        <div className="flex space-x-2.5">
          <DetailInfo label="version:" value={setup.version} />
          <DetailInfo label="created:" value={moment(setup.createdAt).format('MMM Do YY')} />
          <DetailInfo label="modified:" value={moment(setup.updatedAt).format('MMM Do YY')} />
        </div>
        <div className="space-y-2.5">
          {/* <h3 className="text-lg">Comments</h3> */}
          <Form onSubmit={handleSubmit(handleFormSubmit)} register={register}>
            <TextareaField label="Leave a comment" name="message" />
            <SubmitBtn>Leave comment</SubmitBtn>
          </Form>
          <div />
        </div>
      </div>
      <div className="col-span-5 -mx-2.5 flex flex-col overflow-y-auto p-2.5 pt-0">
        <SetupPanel data={setup} />
      </div>
    </div>
  );
}

export default SetupViewer;
