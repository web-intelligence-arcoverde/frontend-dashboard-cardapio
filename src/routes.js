import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/SignIn';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import User from './pages/User';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [{ path: '/', element: <Login /> }]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
