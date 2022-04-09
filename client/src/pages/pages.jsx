import React from 'react';
import { Outlet } from 'react-router-dom';
import NotificationContainer from 'components/ui/notificationContainer';

function Pages() {
  return (
    <>
      <Outlet />
      <NotificationContainer />
    </>
  );
}

export default Pages;
