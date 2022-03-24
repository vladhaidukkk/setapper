import React from 'react';
import { Navigate } from 'react-router-dom';
import { EmptyRedactor, SetupRedactor, SetupsBar } from 'components/layout';
import { sectionConstants } from 'utils/constants';
import { Documentation } from 'pages';
import { BuilderPathValidator } from 'hoc';

const builderRoutes = [
  {
    path: `${sectionConstants.DOC_NAME}/`,
    element: <Documentation />,
  },
  {
    path: `${sectionConstants.DOC_NAME}/*`,
    element: <Navigate to="" replace />,
  },
  {
    path: ':section/',
    element: (
      <BuilderPathValidator>
        <SetupsBar />
        <EmptyRedactor />
      </BuilderPathValidator>
    ),
  },
  {
    path: ':section/:setupId/',
    element: (
      <BuilderPathValidator>
        <SetupsBar />
        <SetupRedactor />
      </BuilderPathValidator>
    ),
  },
  {
    path: ':section/:setupId/*',
    element: <Navigate to="" replace />,
  },
  {
    path: '*',
    element: <Navigate to={sectionConstants.DOC_NAME} replace />,
  },
];

export default builderRoutes;
