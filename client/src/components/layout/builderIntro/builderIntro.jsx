import React from 'react';
import Container from '../../common/container';

function BuilderIntro() {
  return (
    <section className="bg-white dark:bg-stone-800">
      <Container>
        <div className="flex flex-col items-center px-4 pt-16 pb-24 text-center text-black dark:text-white sm:pt-20 sm:pb-28 md:pt-24 md:pb-32">
          <h1 className="mb-10 space-y-1 text-6xl font-bold drop-shadow sm:text-7xl md:text-8xl">
            <div>
              <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">Buil</span>
              <span className="bg-gradient-to-r from-violet-500 to-violet-600 bg-clip-text text-transparent">der</span>
            </div>
          </h1>
          <h3 className="mb-12 max-w-4xl text-2xl drop-shadow sm:mb-16 sm:text-3xl">
            Builder - it&apos;s a section of the site to{' '}
            <span className="font-medium underline decoration-violet-600 underline-offset-1">create</span> your own
            setups. Here you can choose a tool which you want to use in your project and in{' '}
            <span className="font-medium underline decoration-indigo-600 underline-offset-1">few click</span> setup it
            for your project.
          </h3>
        </div>
      </Container>
    </section>
  );
}

export default BuilderIntro;
