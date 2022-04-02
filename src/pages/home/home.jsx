import React from 'react';
import { Header, Intro, ToolsIntro, Footer } from 'components/layout';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <ToolsIntro />
      </main>
      <Footer />
    </>
  );
}

export default Home;
