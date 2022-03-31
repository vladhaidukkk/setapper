import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/layout';
import Container from 'components/common/container';

function Settings() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-auto bg-white dark:bg-stone-800">
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
}

export default Settings;
