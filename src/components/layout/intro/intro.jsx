import React from 'react';
import Container from 'components/common/container';
import { Link } from 'react-router-dom';
import { ArrowSmRightIcon } from '@heroicons/react/solid';
import { PrivateElement, PublicElement } from 'hoc';

function Intro() {
  return (
    <section className="bg-white dark:bg-stone-800">
      <Container>
        <div className="flex flex-col items-center px-4 pt-16 pb-24 text-center text-black dark:text-white sm:pt-20 sm:pb-28 md:pt-24 md:pb-32">
          <h1 className="mb-10 space-y-1 text-6xl font-bold drop-shadow sm:text-7xl md:text-8xl">
            <div>Welcome to</div>
            <div>
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">Set</span>
              <span className="bg-gradient-to-r from-violet-500 to-violet-600 bg-clip-text text-transparent">
                apper
              </span>
            </div>
          </h1>
          <h3 className="mb-12 max-w-4xl text-2xl drop-shadow sm:mb-16 sm:text-3xl">
            A site for{' '}
            <span className="font-medium underline decoration-indigo-600 underline-offset-1">quick set-up</span> of the
            programming environment. Just choose a tool and in a{' '}
            <span className="font-medium underline decoration-violet-600 underline-offset-1">few clicks</span> create a
            convenient environment
          </h3>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
            <PublicElement>
              <Link
                to="auth/login"
                className="text-md group flex items-center justify-between rounded-md border border-indigo-500 bg-indigo-500 px-4 py-2 text-white shadow outline-none
              transition-all dark:bg-transparent dark:hover:bg-indigo-500 dark:focus:bg-indigo-500 sm:text-lg md:text-xl"
              >
                Log into Account
                <ArrowSmRightIcon className="ml-2.5 h-6 w-6 text-white transition-all group-hover:w-0 group-focus:w-0 dark:text-indigo-500" />
              </Link>
            </PublicElement>
            <PrivateElement>
              <Link
                to="builder/inspector"
                className="text-md group flex items-center justify-between rounded-md border border-indigo-500 bg-indigo-500 px-4 py-2 text-white shadow
              outline-none transition-all dark:bg-transparent dark:hover:bg-indigo-500 dark:focus:bg-indigo-500 sm:text-lg md:text-xl"
              >
                Create custom Setup
                <ArrowSmRightIcon className="ml-2.5 h-6 w-6 text-white transition-all group-hover:w-0 group-focus:w-0 dark:text-indigo-500" />
              </Link>
            </PrivateElement>
            <Link
              to="presets/inspector"
              className="text-md group flex items-center justify-between rounded-md border border-violet-500 bg-violet-500 px-4 py-2 text-white
              shadow outline-none transition-all dark:bg-transparent dark:hover:bg-violet-500 dark:focus:bg-violet-500 sm:text-lg md:text-xl"
            >
              Choose a Preset
              <ArrowSmRightIcon className="ml-2.5 h-6 w-6 text-white transition-all group-hover:w-0 group-focus:w-0 dark:text-violet-500" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Intro;
