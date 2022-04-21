import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { capitalize } from 'lodash';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createSetup } from '../../../store/setups/setups.actions';
import Form, { SubmitBtn, TextareaField, TextField } from '../../common/form';
import OptionFieldsList from '../../ui/optionFieldsList';
import SetupPanel from '../../ui/setupPanel';
import { getDefaultSetupDataHelper, validateSetupOptionsHelper } from '../../../utils/helpers';
import Alert from '../../common/alert';
import { builderConstants } from '../../../utils/constants';

function SetupCreator() {
  const dispatch = useDispatch();
  const { tool } = useParams();
  const {
    handleSubmit,
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: getDefaultSetupDataHelper(tool),
  });

  useEffect(() => {
    reset(getDefaultSetupDataHelper(tool));
  }, [tool]);

  const handleFormSubmit = (data) => {
    dispatch(createSetup({ ...data, tool, options: validateSetupOptionsHelper(tool, data.options) }));
  };

  return (
    <div className="grid flex-1 grid-cols-12 gap-x-2.5 p-2.5 pb-0">
      <div className="col-span-7 flex flex-col space-y-2.5 overflow-y-auto">
        {!builderConstants[tool].PRODUCTION && (
          <div className="px-1">
            <Alert
              message={`${capitalize(
                tool
              )} configuration options are in development. Now you can't create setup for it.`}
            />
          </div>
        )}
        <h3 className="px-1 text-2xl font-medium text-black dark:text-white">New {capitalize(tool)} setup</h3>
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
            {builderConstants[tool].PRODUCTION && <SubmitBtn>Create setup</SubmitBtn>}
          </Form>
        </div>
      </div>
      <div className="col-span-5 -mx-2.5 flex flex-col overflow-y-auto p-2.5 pt-0">
        <SetupPanel data={watch()} />
      </div>
    </div>
  );
}

export default SetupCreator;
