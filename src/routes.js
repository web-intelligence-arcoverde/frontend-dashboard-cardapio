import { Routes, Route, useNavigate } from 'react-router-dom';

import DashboardLayout from './layouts/dashboard';

import Login from './pages/SignIn';
import Dashboard from './pages/DashboardApp';

import ListRoles from './pages/Role/List';
import CreateRole from './pages/Role/Create';

const history = { navigate: () => {} };

const useSetHistory = () => {
  history.navigate = useNavigate();
};

export const navigateTo = (route, ...params) => {
  history.navigate(route, ...params);
};

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
    </Routes>
  );
}
