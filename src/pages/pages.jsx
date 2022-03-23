import React from 'react';
import { Outlet } from 'react-router-dom';
import NotificationContainer from 'components/ui/notificationContainer';

function Pages() {
  return (
    <div className="h-screen bg-slate-50 text-zinc-900 dark:bg-slate-700 dark:text-zinc-50">
      <Outlet />
      <NotificationContainer />
    </div>
  );
}

export default Pages;
