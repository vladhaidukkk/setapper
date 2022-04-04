import React from 'react';
import { builderConstants } from 'utils/constants';
import { CheckboxField, TextField } from 'components/common/form';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function OptionFieldsList({ register, name }) {
  const { tool } = useParams();

  return Object.keys(builderConstants[tool]?.OPTIONS).map((optionKey) => {
    const option = builderConstants[tool]?.OPTIONS[optionKey];

    return option.dataType === 'boolean' ? (
      <CheckboxField
        key={optionKey}
        register={register}
        label={option.label}
        name={`${name}.${optionKey}`}
        desc={option.description}
      />
    ) : (
      <TextField
        key={optionKey}
        register={register}
        label={option.label}
        name={`${name}.${optionKey}`}
        desc={option.description}
        placeholder={option.defaultValue.toString()}
      />
    );
  });
}

CheckboxField.defaultProps = {
  register: Function.prototype,
};

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func,
};

export default OptionFieldsList;
