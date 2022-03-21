import React from 'react';
import Pages from 'pages';
import { Navigate } from 'react-router-dom';

const appRoutes = [
  {
    path: '/',
    element: <Pages />,
    children: [
      {
        index: true,
        element: <h1>Welcome</h1>,
      },
      {
        path: 'auth/*',
        element: <h1>Auth</h1>,
      },
      {
        path: 'presets',
        element: <h1>Presets</h1>,
      },
      {
        path: 'presets/*',
        element: <Navigate to="/presets" replace />,
      },
      {
        path: 'builder',
        element: <h1>Builder</h1>,
      },
      {
        path: '*',
        element: <Navigate to="/builder" replace />,
      },
    ],
  },
];

export default appRoutes;
