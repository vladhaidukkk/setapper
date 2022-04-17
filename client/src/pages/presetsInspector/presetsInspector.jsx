import React from 'react';
import { Footer, Header, PresetsOptions } from '../../components/layout';
import PresetsIntro from '../../components/layout/presetsIntro/presetsIntro';

function PresetsInspector() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main>
        <PresetsIntro />
        <PresetsOptions />
      </main>
      <Footer />
    </div>
  );
}

export default PresetsInspector;
