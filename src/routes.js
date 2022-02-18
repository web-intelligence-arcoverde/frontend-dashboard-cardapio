import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/SignIn';
import DashboardApp from './pages/DashboardApp';

import ListRoles from './pages/Role/List';
import CreateRole from './pages/Role/Create';

import Error from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'role', element: <ListRoles /> },
        { path: 'role/create', element: <CreateRole /> }
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
