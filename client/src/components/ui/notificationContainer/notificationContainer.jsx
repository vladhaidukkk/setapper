import React from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { notificationConstants } from '../../../utils/constants';

function NotificationContainer() {
  const getIcon = ({ type }) => {
    const Icon = notificationConstants.ICONS[type];
    return (
      Icon &&
      React.cloneElement(<Icon />, {
        className: notificationConstants.ICON_CLASSES[type],
      })
    );
  };

  const getProgressClassName = ({ defaultClassName, type }) => {
    return `${defaultClassName} bg-gradient-to-r ${notificationConstants.PROGRESS_CLASSES[type]}`;
  };

  return (
    <ToastContainer
      autoClose={4000}
      limit={3}
      transition={Slide}
      draggablePercent={60}
      closeButton={false}
      icon={getIcon}
      toastClassName="bg-white border border-b-0 border-stone-200 dark:border-stone-700 dark:bg-stone-800 shadow-md rounded-md"
      bodyClassName="text-stone-900 dark:text-stone-100"
      progressClassName={getProgressClassName}
    />
  );
}

export default NotificationContainer;
