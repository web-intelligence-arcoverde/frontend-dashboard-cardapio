import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/SignIn';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';

import Error from './pages/Page404';

import User from './pages/User';
import CreateUser from './pages/CreateUser';

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
        { path: 'user/create', element: <CreateUser /> },
        { path: 'user/edit', element: <CreateUser /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <User /> },
        { path: 'order', element: <User /> },
        { path: 'category', element: <User /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Login /> },
        { path: '/404', element: <Error /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
