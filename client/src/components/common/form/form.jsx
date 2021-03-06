import React from 'react';
import PropTypes from 'prop-types';

function Form({ onSubmit, register, children }) {
  return (
    <form className="grid grid-cols-2 gap-2.5" onSubmit={onSubmit}>
      {React.Children.map(children, (child) => {
        if (!child) return null;
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
  register: PropTypes.func.isRequired,
};

export default Form;
