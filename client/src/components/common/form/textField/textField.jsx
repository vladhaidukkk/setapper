import React from 'react';
import PropTypes from 'prop-types';
import ErrorField from '../errorField/errorField';

function TextField({ name, label, register, validation, error, placeholder, desc }) {
  return (
    <div className="col-span-1">
      {label && (
        <label htmlFor={name} className="mb-1 block text-sm font-medium text-stone-800 dark:text-stone-200">
          {label}
        </label>
      )}
      <input
        type="text"
        id={name}
        autoComplete="off"
        className="block w-full rounded-md border border-stone-300 text-sm text-black placeholder-stone-500 shadow-sm outline-none focus:z-10 focus:border-indigo-600 focus:ring-indigo-600 dark:border-stone-700 dark:bg-stone-900 dark:text-white dark:placeholder-stone-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
        {...register(name, validation)}
        placeholder={placeholder}
      />
      {desc && <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{desc}</p>}
      {error && <ErrorField error={error.message} />}
    </div>
  );
}

TextField.defaultProps = {
  register: Function.prototype,
  validation: undefined,
  placeholder: undefined,
  error: undefined,
  desc: undefined,
  label: undefined,
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  register: PropTypes.func,
  validation: PropTypes.object,
  placeholder: PropTypes.string,
  error: PropTypes.object,
  desc: PropTypes.string,
};

export default TextField;
