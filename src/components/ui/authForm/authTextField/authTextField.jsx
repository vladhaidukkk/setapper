import React from 'react';
import PropTypes from 'prop-types';
import { useRandomId } from 'hooks';

function AuthTextField({ name, type, label, register, position, autoComplete, validation }) {
  const id = useRandomId(`${name}-`);

  const getBorderRadius = () => {
    if (position === 'first') return 'rounded-t-md';
    if (position === 'last') return 'rounded-b-md';
    return undefined;
  };

  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        {...register(name, validation)}
        type={type}
        autoComplete={autoComplete}
        className={`relative block w-full appearance-none rounded-none border border-stone-300 px-3 py-2 text-sm
                text-black placeholder-stone-500 outline-none focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 md:text-base
                ${getBorderRadius()}`}
        placeholder={label}
      />
    </div>
  );
}

AuthTextField.defaultProps = {
  type: 'text',
  register: Function.prototype,
  position: undefined,
  autoComplete: 'off',
  validation: undefined,
};

AuthTextField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func,
  position: PropTypes.string,
  autoComplete: PropTypes.string,
  validation: PropTypes.object,
};

export default AuthTextField;
