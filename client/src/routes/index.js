import React from 'react';
import Pages from '../pages';
import appRoutes from './app.routes';

const routes = [
  {
    path: '/',
    element: <Pages />,
    children: appRoutes,
  },
];

export default routes;
