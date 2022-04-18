import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { PhotographIcon } from '@heroicons/react/solid';
import ErrorField from '../errorField/errorField';
import AdjustedImg from '../../adjustedImg';
import { PulsingLoader } from '../../loaders';

function ImageField({ name, defaultImg, label, register, set, validation, error, desc, btnText }) {
  const [img, setImg] = useState(defaultImg);
  const inputRef = useRef(null);

  useEffect(() => {
    setImg(defaultImg);
  }, [defaultImg]);

  const setImageFromFile = (file) => {
    const fr = new FileReader();
    fr.onload = () => {
      setImg(fr.result);
    };
    fr.readAsDataURL(file);
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    setImageFromFile(file);
    set(name, file);
  };

  const handleOpen = () => {
    inputRef.current.click();
  };

  return (
    <div className="col-span-2">
      {label && (
        <label htmlFor={name} className="mb-1 block text-sm font-medium text-stone-800 dark:text-stone-200">
          {label}
        </label>
      )}
      <div className="flex items-end space-x-2.5">
        {img ? (
          <div className="h-16 w-16 overflow-hidden rounded-md border border-stone-300 shadow-sm dark:border-stone-700">
            <AdjustedImg alt={label} img={img} />
          </div>
        ) : (
          <PulsingLoader />
        )}
        <input
          type="file"
          accept=".png,.jsp,.jpeg"
          id={name}
          autoComplete="off"
          className="hidden"
          {...register(name, {
            ...validation,
            onChange: handleChange,
          })}
          ref={inputRef}
        />
        <button
          type="button"
          onClick={handleOpen}
          className="flex items-center rounded-md border border-stone-300 py-1.5 pl-2.5 pr-3 text-sm text-black shadow-sm outline-none hover:border-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:z-10 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 dark:border-stone-700 dark:bg-stone-900 dark:text-white dark:hover:border-indigo-500 dark:hover:ring-indigo-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
        >
          <PhotographIcon className="mr-1.5 h-4 w-4" />
          {btnText}
        </button>
      </div>
      {desc && <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{desc}</p>}
      {error && <ErrorField error={error.message} />}
    </div>
  );
}

ImageField.defaultProps = {
  register: Function.prototype,
  validation: undefined,
  error: undefined,
  defaultImg: undefined,
  desc: undefined,
  label: undefined,
};

ImageField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  defaultImg: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  register: PropTypes.func,
  validation: PropTypes.object,
  error: PropTypes.object,
  set: PropTypes.func.isRequired,
  desc: PropTypes.string,
  btnText: PropTypes.string.isRequired,
};

export default ImageField;
