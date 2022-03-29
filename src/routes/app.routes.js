import React from 'react';
import { Auth, Builder, Dashboard, Home, Presets, Settings } from 'pages';
import { Navigate } from 'react-router-dom';
import authRoutes from 'routes/auth.routes';
import builderRoutes from 'routes/builder.routes';
import { PrivateRoute, PublicRoute } from 'hoc';
import settingsRoutes from 'routes/settings.routes';

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
    element: (
      <PrivateRoute>
        <Builder />
      </PrivateRoute>
    ),
    children: builderRoutes,
  },
  {
    path: 'dashboard/',
    element: <Dashboard />,
  },
  {
    path: 'dashboard/*',
    element: <Navigate to="" replace />,
  },
  {
    path: 'settings/*',
    element: <Settings />,
    children: settingsRoutes,
  },
  {
    path: '*',
    element: (
      <PublicRoute>
        <Navigate to="" replace />
      </PublicRoute>
    ),
  },
];

export default appRoutes;
