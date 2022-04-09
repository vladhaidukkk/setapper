import React from 'react';
import { Navigate } from 'react-router-dom';
import { SetupViewer, SetupCreator, SetupEditor } from 'components/layout';
import { SetupLoader } from 'hoc';

const builderRoutes = [
  {
    path: ':tool/',
    element: <SetupCreator />,
  },
  {
    path: ':tool/:setupId/',
    element: (
      <SetupLoader>
        <SetupViewer />
      </SetupLoader>
    ),
  },
  {
    path: ':tool/:setupId/:edit/',
    element: (
      <SetupLoader>
        <SetupEditor />
      </SetupLoader>
    ),
  },
  {
    path: ':tool/:setupId/:edit/*',
    element: <Navigate to="" replace />,
  },
  {
    path: '*',
    element: <Navigate to="" replace />,
  },
];

export default builderRoutes;
