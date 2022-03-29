import React from 'react';
import { Header, Intro, ToolsIntro, Footer } from 'components/layout';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <Intro />
        <ToolsIntro />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
