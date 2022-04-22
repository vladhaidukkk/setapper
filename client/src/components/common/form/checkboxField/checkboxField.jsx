import React from 'react';
import PropTypes from 'prop-types';

function CheckboxField({ name, register, label, desc, validation }) {
  return (
    <div className="col-span-2 flex items-start lg:col-span-1">
      <div className="flex h-5 items-center">
        <input
          id={name}
          {...register(name, validation)}
          type="checkbox"
          className="dark: h-4 w-4 rounded border border-stone-300 bg-white text-indigo-600 shadow-sm outline-none ring-offset-white checked:border-indigo-600 checked:bg-indigo-500 checked:bg-indigo-600 hover:checked:bg-indigo-600 focus:border-indigo-600 focus:ring-indigo-600 dark:border-stone-700 dark:bg-stone-900 dark:text-indigo-500 dark:ring-offset-stone-800 dark:checked:border-indigo-500 dark:checked:bg-indigo-600 dark:hover:checked:bg-indigo-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
        />
      </div>
      <div className="ml-3 text-sm">
        <label id={name} className="font-medium text-stone-800 dark:text-stone-200">
          {label}
        </label>
        {desc && <p className="text-stone-600 dark:text-stone-400">{desc}</p>}
      </div>
    </div>
  );
}

CheckboxField.defaultProps = {
  register: Function.prototype,
  validation: undefined,
  desc: undefined,
};

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func,
  validation: PropTypes.object,
  desc: PropTypes.string,
};

export default CheckboxField;
