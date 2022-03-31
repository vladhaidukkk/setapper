import React from 'react';
import { Navigate } from 'react-router-dom';
import { SetupViewer, SetupCreator, SetupEditor } from 'components/layout';
import { Inspector } from 'pages';
import { BuilderPathValidator } from 'hoc';

const builderRoutes = [
  {
    path: `inspector/`,
    element: <Inspector />,
  },
  {
    path: `inspector/*`,
    element: <Navigate to="" replace />,
  },
  {
    path: ':tool/',
    element: (
      <BuilderPathValidator>
        <SetupCreator />
      </BuilderPathValidator>
    ),
  },
  {
    path: ':tool/:setupId/',
    element: (
      <BuilderPathValidator>
        <SetupViewer />
      </BuilderPathValidator>
    ),
  },
  {
    path: ':tool/:setupId/*',
    element: <Navigate to="" replace />,
  },
  {
    path: ':tool/:setupId/:edit/',
    element: (
      <BuilderPathValidator>
        <SetupEditor />
      </BuilderPathValidator>
    ),
  },
  {
    path: ':tool/:setupId/:edit/*',
    element: <Navigate to="" replace />,
  },
  {
    path: '*',
    element: <Navigate to="inspector" replace />,
  },
];

export default builderRoutes;
