import React from 'react';
import { Outlet } from 'react-router-dom';
import NotificationContainer from 'components/ui/notificationContainer';

function Pages() {
  return (
    <div>
      <Outlet />
      <NotificationContainer />
    </div>
  );
}

export default Pages;
