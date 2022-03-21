import { useRoutes } from 'react-router-dom';
import { authRoutes } from 'routes';

function AuthRouter() {
  return useRoutes(authRoutes);
}

export default AuthRouter;
