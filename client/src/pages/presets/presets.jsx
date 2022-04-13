import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, PresetsBar } from '../../components/layout';

function Presets() {
  return (
    <div className="relative flex h-screen flex-col">
      <Header fluid />
      <div className="flex flex-auto overflow-y-auto bg-white dark:bg-stone-800">
        <PresetsBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Presets;
