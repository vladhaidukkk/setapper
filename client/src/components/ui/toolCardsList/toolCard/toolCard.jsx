import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowCircleDownIcon, ArrowCircleUpIcon, BookOpenIcon } from '@heroicons/react/solid';

function ToolCard({ name, icon: Icon, text, link }) {
  const [isOpened, setOpened] = useState(false);

  const toggle = () => {
    setOpened((prev) => !prev);
  };

  return (
    <li>
      <div
        className="overflow-hidden rounded-md border border-stone-300 bg-stone-200 bg-opacity-40 p-3 shadow dark:border-stone-700
      dark:bg-stone-800 md:p-4 lg:p-3 xl:p-4 2xl:pt-3"
      >
        <div className="flex items-center justify-between border-b border-stone-300 pb-3 dark:border-stone-700 md:pb-4 lg:pb-3 xl:pb-4 2xl:pb-3">
          <h4 className="flex items-center text-xl font-medium text-black dark:text-white md:text-2xl lg:text-xl xl:text-2xl 2xl:text-xl">
            <Icon className="mr-2 h-7 w-7 md:mr-3 md:h-8 md:w-8 lg:mr-3 lg:h-7 lg:w-7 xl:mr-3 xl:h-8 xl:w-8 2xl:mr-3 2xl:h-7 2xl:w-7" />
            {name}
          </h4>
          <button
            onClick={toggle}
            type="button"
            className="rounded-md border border-stone-300 bg-transparent p-1 text-stone-700
            outline-none transition-all hover:bg-stone-300 hover:text-black focus:bg-stone-300  focus:text-black
            dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-700 dark:hover:text-white dark:focus:bg-stone-700 dark:focus:text-white"
          >
            {isOpened ? <ArrowCircleDownIcon className="h-5 w-5" /> : <ArrowCircleUpIcon className="h-5 w-5" />}
          </button>
        </div>
        <div className="pt-3 text-left md:pt-4 lg:pt-3 xl:pt-4 2xl:pt-3">
          <p
            className={`text-md lg:text-md 2xl:text-md text-black dark:text-white md:text-lg xl:text-lg ${
              !isOpened ? 'line-clamp-4' : ''
            }`}
          >
            {text}
          </p>
          <div className="mt-1 md:mt-2 lg:mt-1 xl:mt-2">
            <a
              href={link}
              target="_blank"
              className="inline-flex items-center text-sm text-stone-600 transition-all duration-200 hover:text-indigo-500 focus:text-indigo-500 dark:text-stone-400 dark:hover:text-indigo-500 dark:focus:text-indigo-500 md:text-base lg:text-sm xl:text-base 2xl:text-sm"
              rel="noreferrer"
            >
              <BookOpenIcon className="mr-1 h-5 w-5" />
              Documentation
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

ToolCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ToolCard;
