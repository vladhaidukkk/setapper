import { Navigate } from 'react-router-dom';
import React from 'react';
import { Profile } from '../pages';

const settingsRoutes = [
  {
    path: 'profile/',
    element: <Profile />,
  },
  {
    path: 'profile/*',
    element: <Navigate to="" replace />,
  },
  {
    path: '*',
    element: <Navigate to="profile" replace />,
  },
];

export default settingsRoutes;
