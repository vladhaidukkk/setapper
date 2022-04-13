import React from 'react';
import { Navigate } from 'react-router-dom';
import { Auth, Builder, BuilderInspector, Dashboard, Home, Presets, PresetsInspector, Settings } from '../pages';
import authRoutes from './auth.routes';
import builderRoutes from './builder.routes';
import { BuilderPathValidator, PresetsPathValidator, PrivateRoute, PublicRoute } from '../hoc';
import settingsRoutes from './settings.routes';
import presetsRoutes from './presets.routes';

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
    element: <PresetsInspector />,
  },
  {
    path: 'presets/*',
    element: (
      <PresetsPathValidator>
        <Presets />
      </PresetsPathValidator>
    ),
    children: presetsRoutes,
  },
  {
    path: 'builder/',
    element: (
      <PrivateRoute>
        <BuilderInspector />
      </PrivateRoute>
    ),
  },
  {
    path: 'builder/*',
    element: (
      <PrivateRoute>
        <BuilderPathValidator>
          <Builder />
        </BuilderPathValidator>
      </PrivateRoute>
    ),
    children: builderRoutes,
  },
  {
    path: 'dashboard/',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: 'dashboard/*',
    element: <Navigate to="" replace />,
  },
  {
    path: 'settings/*',
    element: (
      <PrivateRoute>
        <Settings />
      </PrivateRoute>
    ),
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
