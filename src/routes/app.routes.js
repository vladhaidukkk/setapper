import React from 'react';
import { Auth, Builder, Home, Presets } from 'pages';
import { Navigate } from 'react-router-dom';
import authRoutes from 'routes/auth.routes';
import builderRoutes from 'routes/builder.routes';

const appRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: 'auth/*',
    element: <Auth />,
    children: authRoutes,
  },
  {
    path: 'presets/',
    element: <Presets />,
  },
  {
    path: 'presets/*',
    element: <Navigate to="" replace />,
  },
  {
    path: 'builder/*',
    element: <Builder />,
    children: builderRoutes,
  },
  {
    path: '*',
    element: <Navigate to="" replace />,
  },
];

export default appRoutes;
