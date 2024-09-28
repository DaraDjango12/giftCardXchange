import DashboardScreen from "@components/admin/Dashboard";
import AdminDashboardLayout from "@layouts/AdminDashboardLayout";
import { Outlet, useLocation } from "react-router-dom";

const AdminDashboard = () => {
  const { pathname } = useLocation();
  return (
    <AdminDashboardLayout>
      {pathname === "/admin" && <DashboardScreen />}
      <Outlet />
    </AdminDashboardLayout>
  );
};

export default AdminDashboard;
