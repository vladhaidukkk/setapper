import React from 'react';
import { BuilderOptions, Footer, Header } from '../../components/layout';
import BuilderIntro from '../../components/layout/builderIntro/builderIntro';

function BuilderInspector() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main>
        <BuilderIntro />
        <BuilderOptions />
      </main>
      <Footer />
    </div>
  );
}

export default BuilderInspector;
