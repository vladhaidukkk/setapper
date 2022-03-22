import React from 'react';
import { Slide, ToastContainer } from 'react-toastify';

function NotificationContainer() {
  return <ToastContainer autoClose={4000} limit={3} transition={Slide} draggablePercent={60} />;
}

export default NotificationContainer;
