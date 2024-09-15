import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("@pages/Home"));

const Profile = lazy(() => import("@pages/Profile"));
const Settings = lazy(() => import("@pages/Settings"));

const Register = lazy(() => import("@pages/Auth/Register"));
const Login = lazy(() => import("@pages/Auth/Login"));
const VerifyEmail = lazy(
  () => import("@pages/Auth/components/ForgotPasswordSuccess")
);
const EmailVerification = lazy(
  () => import("@pages/Auth/components/EmailVerification")
);
const Verified = lazy(() => import("@pages/Auth/components/EmailVerified"));
const ForgotPassword = lazy(() => import("@pages/Auth/ForgotPassword"));
const ResetPassword = lazy(() => import("@pages/Auth/ResetPassword"));
const ResetPasswordSuccess = lazy(
  () => import("@pages/Auth/components/ResetPasswordSuccess")
);

const AdminDashboard = lazy(() => import("@pages/Admin"));
const AdminUsers = lazy(() => import("@components/admin/UserInfo"));
const AdminOpportunities = lazy(
  () => import("@components/admin/Opportunities")
);
const AdminComplaints = lazy(() => import("@components/admin/Complaints"));
const AdminBroadCast = lazy(() => import("@components/admin/BroadCast"));

const AdminViewUser = lazy(() => import("@components/admin/UserInfo/ViewUser"));

const AppRoutes = () => {
  return (
    <>
      <Routes >
        {/* Home Page */}
        <Route
          path=""
          element={
            <React.Suspense>
              <Home />
            </React.Suspense>
          }
        />

        {/* contact page */}

        {/* Authentication Screens */}
        <Route
          path="/register"
          element={
            <React.Suspense>
              <Register />
            </React.Suspense>
          }
        />

        <Route
          path="/verify-email"
          element={
            <React.Suspense>
              <EmailVerification />
            </React.Suspense>
          }
        />

        <Route
          path="/email-verified"
          element={
            <React.Suspense>
              <Verified />
            </React.Suspense>
          }
        />

        <Route
          path="/signin"
          element={
            <React.Suspense>
              <Login />
            </React.Suspense>
          }
        />

        <Route
          path="/forget-password"
          element={
            <React.Suspense>
              <ForgotPassword />
            </React.Suspense>
          }
        />

        <Route
          path="/forgot-password-success"
          element={
            <React.Suspense>
              <VerifyEmail />
            </React.Suspense>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <React.Suspense>
              <ResetPassword />
            </React.Suspense>
          }
        />
        <Route
          path="/reset-password-success"
          element={
            <React.Suspense>
              <ResetPasswordSuccess />
            </React.Suspense>
          }
        />

        {/* User  Page .... with nested pages */}
        {/* <Route
          path="/schollar"
          element={
            <React.Suspense>
              <SchollarHome/>
            </React.Suspense>
          }
        > */}
        <Route path="profile" element={<Profile />} />
        {/* <Route path="profile/:id" element={<ViewProfile />} /> */}

        <Route path="settings" element={<Settings />} />
        {/* </Route> */}

        {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <React.Suspense>
              <AdminDashboard />
            </React.Suspense>
          }
        >
          <Route path="users" element={<AdminUsers />} />
          <Route path="users/:userId" element={<AdminViewUser />} />
          <Route path="opportunities" element={<AdminOpportunities />} />

          <Route path="complaints" element={<AdminComplaints />} />
          <Route path="broadcast" element={<AdminBroadCast />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
