import React from 'react';
import { ControlManager, Footer, Header } from '../../components/layout';
import Container from '../../components/common/container';

function Control() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-auto bg-white dark:bg-stone-800">
        <Container>
          <ControlManager />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default Control;
