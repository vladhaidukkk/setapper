import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

function Form({ onSubmit, children }) {
  const { handleSubmit, register } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.cloneElement(child, {
              register,
              key: child.props.name,
            })
          : child;
      })}
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default Form;
