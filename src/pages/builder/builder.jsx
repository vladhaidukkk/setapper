import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavBar } from 'components/layout';

function Builder() {
  return (
    <div className="flex h-screen flex-col">
      <Header fluid />
      <div className="flex flex-auto bg-gray-800">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Builder;
