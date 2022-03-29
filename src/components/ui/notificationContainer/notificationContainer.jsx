import React from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function NotificationContainer() {
  return <ToastContainer autoClose={4000} limit={3} transition={Slide} draggablePercent={60} />;
}

export default NotificationContainer;
