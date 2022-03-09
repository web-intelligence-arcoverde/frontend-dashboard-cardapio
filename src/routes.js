import { Routes, Route } from 'react-router-dom';

import DashboardLayout from './layouts/dashboard';

import Login from './pages/SignIn';
import Dashboard from './pages/DashboardApp';

import ListRoles from './pages/Role/List';
import CreateRole from './pages/Role/Create';
import UpdateRole from './pages/Role/Update';

import { useSetHistory } from './helpers/navigate';

export default function Router() {
  useSetHistory();
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        }
      />

      <Route
        path="/dashboard/role"
        element={
          <DashboardLayout>
            <ListRoles />
          </DashboardLayout>
        }
      />

      <Route
        path="/dashboard/role/create"
        element={
          <DashboardLayout>
            <CreateRole />
          </DashboardLayout>
        }
      />

      <Route
        path="/dashboard/role/update"
        element={
          <DashboardLayout>
            <UpdateRole />
          </DashboardLayout>
        }
      />
    </Routes>
  );
}
