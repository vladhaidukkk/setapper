import React from 'react';
import Pages, { Auth, Builder, Home, Presets } from 'pages';
import { Navigate } from 'react-router-dom';

const appRoutes = [
  {
    path: '/',
    element: <Pages />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'auth/*',
        element: <Auth />,
      },
      {
        path: 'presets',
        element: <Presets />,
      },
      {
        path: 'presets/*',
        element: <Navigate to="" replace />,
      },
      {
        path: 'builder',
        element: <Builder />,
      },
      {
        path: '*',
        element: <Navigate to="" replace />,
      },
    ],
  },
];

export default appRoutes;
