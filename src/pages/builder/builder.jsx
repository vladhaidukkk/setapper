import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from 'components/layout';

function Builder() {
  return (
    <div className="flex min-h-screen w-full bg-gray-800">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Builder;
