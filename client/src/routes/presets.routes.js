import React from 'react';
import { Navigate } from 'react-router-dom';
import { PresetViewer, ToolPresetsViewer } from '../components/layout';
import { PresetLoader } from '../hoc';

const presetsRoutes = [
  {
    path: ':tool/',
    element: <ToolPresetsViewer />,
  },
  {
    path: ':tool/:presetId/',
    element: (
      <PresetLoader>
        <PresetViewer />
      </PresetLoader>
    ),
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
