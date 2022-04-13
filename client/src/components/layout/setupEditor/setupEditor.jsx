import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Form, { SubmitBtn, TextareaField, TextField } from '../../common/form';
import OptionFieldsList from '../../ui/optionFieldsList';
import SetupPanel from '../../ui/setupPanel';
import { validateSetupOptionsHelper } from '../../../utils/helpers';
import { updateSetup } from '../../../store/setups/setups.actions';
import { getSetupById } from '../../../store/setups/setups.selectors';

function SetupEditor() {
  const dispatch = useDispatch();
  const { tool, setupId } = useParams();
  const setup = useSelector(getSetupById(setupId));
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: setup,
  });

  const handleFormSubmit = (data) => {
    dispatch(updateSetup(setupId, { ...data, options: validateSetupOptionsHelper(tool, data.options) }));
  };

  return (
    <div className="grid flex-1 grid-cols-12 gap-x-2.5 p-2.5 pb-0">
      <div className="col-span-7 flex flex-col space-y-2.5 overflow-y-auto">
        <h3 className="px-1 text-2xl font-medium text-black dark:text-white">Edit setup</h3>
        <div className="overflow-y-auto px-1 pb-2.5">
          <Form onSubmit={handleSubmit(handleFormSubmit)} register={register}>
            <TextField
              label="Setup title"
              name="title"
              placeholder="Title..."
              error={errors.title}
              validation={{
                required: 'Title is required',
              }}
            />
            <TextField
              label="Setup version"
              name="version"
              placeholder="Version..."
              error={errors.version}
              validation={{
                required: 'Version is required',
              }}
            />
            <TextareaField
              label="Setup description"
              name="description"
              placeholder="Description..."
              error={errors.description}
              validation={{
                required: 'Description is required',
              }}
            />
            <OptionFieldsList name="options" />
            <SubmitBtn>Update setup</SubmitBtn>
          </Form>
        </div>
      </div>
      <div className="col-span-5 -mx-2.5 flex flex-col overflow-y-auto p-2.5 pt-0">
        <SetupPanel data={watch()} />
      </div>
    </div>
  );
}

export default SetupEditor;
