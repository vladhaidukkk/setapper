import React from 'react';
import { useRandomId } from 'hooks';
import PropTypes from 'prop-types';

function TextInput({ label, register, name }) {
  const id = useRandomId();

  return (
    <div className="col-span-6 sm:col-span-3">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        {...register(name)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        type="text"
        id={id}
      />
    </div>
  );
}

TextInput.defaultProps = {
  register: Function.prototype,
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func,
};

export default TextInput;
