import React from 'react';
import PropTypes from 'prop-types';
import ErrorField from '../errorField/errorField';

function TextareaField({ name, label, register, validation, placeholder, error, desc }) {
  return (
    <div className="col-span-2">
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-stone-800 dark:text-stone-200">
        {label}
      </label>
      <textarea
        id={name}
        autoComplete="off"
        className="block max-h-64 min-h-[5rem] w-full rounded-md border border-stone-300 text-sm text-black placeholder-stone-500 shadow-sm outline-none focus:z-10 focus:border-indigo-600 focus:ring-indigo-600 dark:border-stone-700 dark:bg-stone-900 dark:text-white dark:placeholder-stone-400 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
        {...register(name, validation)}
        placeholder={placeholder}
        rows={3}
      />
      {desc && <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{desc}</p>}
      {error && <ErrorField error={error.message} />}
    </div>
  );
}

TextareaField.defaultProps = {
  register: Function.prototype,
  validation: undefined,
  placeholder: undefined,
  error: undefined,
  desc: undefined,
};

TextareaField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func,
  validation: PropTypes.object,
  placeholder: PropTypes.string,
  error: PropTypes.object,
  desc: PropTypes.string,
};

export default TextareaField;
