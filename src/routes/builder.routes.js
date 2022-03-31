import React from 'react';
import { Navigate } from 'react-router-dom';
import { SetupViewer, SetupCreator, SetupEditor } from 'components/layout';

const builderRoutes = [
  {
    path: ':tool/',
    element: <SetupCreator />,
  },
  {
    path: ':tool/:setupId/',
    element: <SetupViewer />,
  },
  {
    path: ':tool/:setupId/:edit/',
    element: <SetupEditor />,
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
