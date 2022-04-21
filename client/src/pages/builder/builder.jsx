import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, SetupsBar } from '../../components/layout';

function Builder() {
  return (
    <div className="relative flex h-screen flex-col">
      <Header fluid />
      <div className="flex flex-auto overflow-y-auto bg-white dark:bg-stone-800">
        <SetupsBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Builder;
