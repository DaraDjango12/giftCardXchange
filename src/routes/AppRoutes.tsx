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

// Admin Dashboard
const AdminDashboard = lazy(() => import("@pages/Admin"));
const Rates = lazy(() => import("@components/admin/Rates"));
const Expenses = lazy(() => import("@components/admin/Expenses"));
const Request = lazy(() => import("@components/admin/Request"));

// User Dashboard
const UserDashboard = lazy(() => import("@pages/User"));
const SellGiftCards = lazy(() => import("@components/user/SellGiftCards"));
const Transactions = lazy(() => import("@components/user/Transactions"));
const Payout = lazy(() => import("@components/user/Transactions"));
const Wallet = lazy(() => import("@components/user/Wallet"));

const AppRoutes = () => {
  return (
    <>
      <Routes>
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
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />

        {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <React.Suspense>
              <AdminDashboard />
            </React.Suspense>
          }
        >
          <Route path="rates" element={<Rates />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="request" element={<Request />} />
        </Route>

        {/* User Dashboard */}
        <Route
          path="/user"
          element={
            <React.Suspense>
              <UserDashboard />
            </React.Suspense>
          }
        >
          <Route path="sell-giftcards" element={<SellGiftCards />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="payout" element={<Payout />} />
          <Route path="wallet" element={<Wallet />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
