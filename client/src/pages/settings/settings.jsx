import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, SettingsMenu } from '../../components/layout';
import Container from '../../components/common/container';

function Settings() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-auto bg-white dark:bg-stone-800">
        <Container>
          <div className="mt-1 flex lg:space-x-4.5">
            <SettingsMenu />
            <div className="flex-1">
              <Outlet />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default Settings;
