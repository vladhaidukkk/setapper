import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToolsBar } from 'components/layout';

function Builder() {
  return (
    <div className="flex h-screen">
      <ToolsBar />
      <Outlet />
    </div>
  );
}

export default Builder;
