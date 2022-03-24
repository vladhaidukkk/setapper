import React from 'react';
import { Navigate } from 'react-router-dom';
import { SetupEditor, SetupsBar, SetupCreator } from 'components/layout';
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
        <SetupsBar />
        <SetupCreator />
      </BuilderPathValidator>
    ),
  },
  {
    path: ':tool/:setupId/',
    element: (
      <BuilderPathValidator>
        <SetupsBar />
        <SetupEditor />
      </BuilderPathValidator>
    ),
  },
  {
    path: ':tool/:setupId/*',
    element: <Navigate to="" replace />,
  },
  {
    path: '*',
    element: <Navigate to="inspector" replace />,
  },
];

export default builderRoutes;
