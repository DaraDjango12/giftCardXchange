import DashboardScreen from "@components/user/Dashboard";
import UserDashboardLayout from "@layouts/UserDashboardLayout";
import { Outlet, useLocation } from "react-router-dom";

const AdminDashboard = () => {
  const { pathname } = useLocation();
  return (
    <UserDashboardLayout>
      {pathname === "/user" && <DashboardScreen />}
      <Outlet />
    </UserDashboardLayout>
  );
};

export default AdminDashboard;
