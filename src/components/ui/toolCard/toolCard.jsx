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
      <div className="overflow-hidden rounded-md border border-stone-300 bg-stone-200 p-4 shadow-md dark:border-stone-700 dark:bg-stone-800">
        <div className="flex items-center justify-between border-b border-stone-300 pb-4 dark:border-stone-700">
          <h4 className="flex items-center text-2xl font-medium text-black dark:text-white">
            <Icon className="mr-3 h-8 w-8" />
            {name}
          </h4>
          <button
            onClick={toggle}
            type="button"
            className="rounded-md border border-stone-300 bg-stone-200 p-1 text-stone-700 outline-none
            transition-all hover:bg-stone-300 hover:text-black focus:bg-stone-300 focus:text-black  dark:border-stone-700
            dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700 dark:hover:text-white dark:focus:bg-stone-700 dark:focus:text-white"
          >
            {isOpened ? <ArrowCircleDownIcon className="h-5 w-5" /> : <ArrowCircleUpIcon className="h-5 w-5" />}
          </button>
        </div>
        <div className="pt-4 text-left">
          <p className={`text-lg text-black dark:text-white ${!isOpened ? 'line-clamp-4' : ''}`}>{text}</p>
          <div className="mt-2">
            <a
              href={link}
              target="_blank"
              className="flex items-center text-stone-600 transition-all hover:text-indigo-500 focus:text-indigo-500 dark:text-stone-400"
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
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ToolCard;
