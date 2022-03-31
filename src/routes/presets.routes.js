import React from 'react';
import { Navigate } from 'react-router-dom';
import { PresetViewer, ToolPresetsViewer } from 'components/layout';

const presetsRoutes = [
  {
    path: ':tool/',
    element: <ToolPresetsViewer />,
  },
  {
    path: ':tool/:presetId/',
    element: <PresetViewer />,
  },
  {
    path: ':tool/:presetId/*',
    element: <Navigate to="" replace />,
  },
  {
    path: '*',
    element: <Navigate to="" replace />,
  },
];

export default presetsRoutes;
