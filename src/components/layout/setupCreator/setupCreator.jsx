import React from 'react';
import { useParams } from 'react-router-dom';
import { capitalize } from 'lodash';
import { useSelector } from 'react-redux';
// import { createSetup } from 'store/setups/setups.actions';
import { getAccountId } from 'store/auth/auth.selectors';
import Form, { SubmitBtn, TextareaField, TextField } from 'components/common/form';
import OptionFieldsList from 'components/ui/optionFieldsList';
import { useForm } from 'react-hook-form';
import SetupPanel from 'components/ui/setupPanel';
import { getDefaultSetupDataHelper, validateSetupOptionsHelper } from 'utils/helpers';

function SetupCreator() {
  // const dispatch = useDispatch();
  const { tool } = useParams();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: getDefaultSetupDataHelper(tool),
  });
  const accountId = useSelector(getAccountId());

  console.log(errors);

  const handleFormSubmit = (data) => {
    const newSetupData = {
      ...data,
      tool,
      ownerId: accountId,
      options: validateSetupOptionsHelper(data.options),
    };
    console.log(newSetupData);
    // dispatch(createSetup({ ...data, tool, ownerId: accountId }));
  };

  return (
    <div className="grid flex-1 grid-cols-12 gap-x-2.5 p-2.5">
      <div className="flex-col col-span-7 flex space-y-2.5 overflow-y-auto">
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
            <SubmitBtn>Create setup</SubmitBtn>
          </Form>
        </div>
      </div>
      <div className="col-span-5">
        <SetupPanel data={watch()} />
      </div>
    </div>
  );
}

export default SetupCreator;
