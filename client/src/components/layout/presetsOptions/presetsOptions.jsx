import React from 'react';
import Container from '../../common/container';
import { toolConstants } from '../../../utils/constants';
import PresetsOption from '../../ui/presetsOption';

function PresetsOptions() {
  return (
    <section className="border-t border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-900">
      <Container>
        <div className="flex flex-col items-center pt-16 pb-24 text-center text-black dark:text-white sm:pt-20 sm:pb-28 md:pt-24 md:pb-32">
          <h2 className="mb-12 max-w-5xl space-y-1 px-4 text-5xl font-bold drop-shadow sm:mb-16 sm:text-6xl md:text-7xl">
            Choose a{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">tool</span>{' '}
            for{' '}
            <span className="bg-gradient-to-r from-violet-500 to-violet-600 bg-clip-text text-transparent">next</span>{' '}
            preset
          </h2>
          <ul className="grid w-full grid-cols-1 gap-4.5 px-2 sm:gap-6 md:grid-cols-2 lg:px-0 2xl:grid-cols-3">
            {toolConstants.LIST.map((tool) => {
              return <PresetsOption label={tool.label} tool={tool.value} icon={tool.icon} key={tool.value} />;
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default PresetsOptions;
