import React from 'react';
import { Navigate } from 'react-router-dom';
import { PresetViewer, ToolPresetsViewer } from 'components/layout';
import { PresetsHome } from 'pages';
import { PresetsPathValidator } from 'hoc';

const presetsRoutes = [
  {
    index: true,
    element: <PresetsHome />,
  },
  {
    path: ':tool/',
    element: (
      <PresetsPathValidator>
        <ToolPresetsViewer />
      </PresetsPathValidator>
    ),
  },
  {
    path: ':tool/:presetId/',
    element: (
      <PresetsPathValidator>
        <PresetViewer />
      </PresetsPathValidator>
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
