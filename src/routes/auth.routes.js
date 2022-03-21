import React from 'react';
import { Navigate } from 'react-router-dom';
import { Login, Registration } from 'pages';

const authRoutes = [
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'registration',
    element: <Registration />,
  },
  {
    path: 'registration/*',
    element: <Navigate to="" replace />,
  },
  {
    path: '*',
    element: <Navigate to="login" replace />,
  },
];

export default authRoutes;
