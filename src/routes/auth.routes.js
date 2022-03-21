import React from 'react';
import { Navigate } from 'react-router-dom';

const authRoutes = [
  {
    path: 'login',
    element: <h1>Login</h1>,
  },
  {
    path: 'registration',
    element: <h1>reg</h1>,
  },
  {
    path: 'registration/*',
    element: <Navigate to="/registration" replace />,
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
];

export default authRoutes;
