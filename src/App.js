import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/responsive.css";
import "./styles/Users.css";
import Login from "./pages/authentication/Login";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import AuthLayout from "./components/Layouts/AuthLayout";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import MonthlySale from "./pages/MonthlySale";
import AddUser from "./pages/users/AddUser";
import UpdateUser from "./pages/users/UpdateUser";
import UserDetail from "./pages/users/UserDetail";
import SMTP from "./pages/settings/SMTP";
import ViewPage from "./pages/settings/ViewPage";
import AddPage from "./pages/settings/AddPage";
import UpdatePage from "./pages/settings/UpdatePage";
import Pages from "./pages/settings/Pages";
import BulkUsers from "./pages/settings/BulkUsers";
import BulkProducts from "./pages/settings/BulkProducts";
import KYC from "./pages/users/KYC";
import AllKYCs from "./pages/users/AllKYCs";
import UpdateKYC from "./pages/users/UpdateKYC";
import ViewKYC from "./pages/users/ViewKYC";
import Users from "./pages/users/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route exact path="/" element={<Dashboard />} />

          {/* Users */}
          <Route path="/users">
            <Route index element={<Users />} />
            <Route path="/users/admin" element={<Users />} />
            <Route path="/users/add-user" element={<AddUser />} />
            <Route path="/users/view/:id" element={<UserDetail />} />
            <Route path="/users/update-user/:id" element={<UpdateUser />} />
            <Route path="/users/kyc" element={<AllKYCs />} />
            <Route path="/users/add-kyc" element={<KYC />} />
            <Route path="/users/update-kyc/:id" element={<UpdateKYC />} />
            <Route path="/users/view-kyc/:id" element={<ViewKYC />} />
          </Route>

          <Route path="/monthly-sale" element={<MonthlySale />} />
          <Route path="/settings">
            <Route index element={<SMTP />} />
            <Route path="/settings/smtp" element={<SMTP />} />

            <Route path="/settings/pages" element={<Pages />} />
            <Route path="/settings/view-page/:id" element={<ViewPage />} />
            <Route path="/settings/add-page" element={<AddPage />} />
            <Route path="/settings/update-page/:id" element={<UpdatePage />} />
            <Route path="/settings/bulk-users" element={<BulkUsers />} />
            <Route path="/settings/bulk-products" element={<BulkProducts />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
