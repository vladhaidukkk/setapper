import React from 'react';
import { Outlet } from 'react-router-dom';
import { SectionsBar } from 'components/layout';

function Builder() {
  return (
    <div className="flex h-screen">
      <SectionsBar />
      <Outlet />
    </div>
  );
}

export default Builder;
