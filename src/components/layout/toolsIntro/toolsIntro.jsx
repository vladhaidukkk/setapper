import React from 'react';
import Container from 'components/common/container';
import ToolCardsList from 'components/ui/toolCardsList';

function ToolsIntro() {
  return (
    <section className="border-t border-stone-200 bg-stone-50 dark:border-stone-700 dark:bg-stone-900">
      <Container>
        <div className="flex flex-col items-center pt-16 pb-24 text-center text-black dark:text-white sm:pt-20 sm:pb-28 md:pt-24 md:pb-32">
          <h2 className="mb-12 max-w-5xl space-y-1 px-4 text-5xl font-bold drop-shadow sm:mb-16 sm:text-6xl md:text-7xl">
            We have builders for{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
              the most
            </span>{' '}
            <span className="bg-gradient-to-r from-violet-500 to-violet-600 bg-clip-text text-transparent">
              popular
            </span>{' '}
            tools
          </h2>
          <div>
            <ToolCardsList />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ToolsIntro;
