import React from 'react';
import { Header } from 'components/layout';
import Container from 'components/common/container';

function PresetsInspector() {
  return (
    <div>
      <Header />
      <main className="bg-white dark:bg-stone-800">
        <Container>
          <h1>Presets Inspector</h1>
        </Container>
      </main>
    </div>
  );
}

export default PresetsInspector;
