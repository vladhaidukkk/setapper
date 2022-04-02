import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/layout';
import Container from 'components/common/container';

function Auth() {
  return (
    <div className="flex h-screen flex-col bg-white dark:bg-stone-800">
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default Auth;
