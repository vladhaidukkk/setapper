import { Profile } from 'pages';
import { Navigate } from 'react-router-dom';
import React from 'react';

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
