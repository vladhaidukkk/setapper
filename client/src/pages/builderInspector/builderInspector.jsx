import React from 'react';
import { Header } from '../../components/layout';
import BuilderIntro from '../../components/layout/builderIntro/builderIntro';

function BuilderInspector() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-auto bg-white dark:bg-stone-800">
        <BuilderIntro />
      </main>
    </div>
  );
}

export default BuilderInspector;
