import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/layout';

function Auth() {
  return (
    <div className="flex h-screen flex-col bg-white dark:bg-stone-800">
      <Header />
      <Outlet />
    </div>
  );
}

export default Auth;
