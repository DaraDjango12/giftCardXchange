// import React, { lazy } from "react";
// import { Route, Routes } from "react-router-dom";

// const Home = lazy(() => import("@pages/"));
// const AdminDashboard = lazy(() => import("@pages/Admin"));
// const AdminUsers = lazy(() => import("@components/admin/UserInfo"));

// const AppRoutes = () => {
//   return (
//     <>
//       <Routes>
//         {/* Home Page */}
//         <Route
//           path=""
//           element={
//             <React.Suspense>
//               <Home />
//             </React.Suspense>
//           }
//         />

//         {/* Admin Dashboard */}
//         <Route
//           path="/dashboard"
//           element={
//             <React.Suspense>
//               <AdminDashboard />
//             </React.Suspense>
//           }
//         >
//           <Route path="users" element={<AdminUsers />} />
//         </Route>
//       </Routes>
//     </>
//   );
// };

// export default AppRoutes;
