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
import AddPage from "./pages/settings/AddPage";
import BulkProducts from "./pages/settings/BulkProducts";
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
          </Route>

          <Route path="/monthly-sale" element={<MonthlySale />} />
          <Route path="/settings">
            <Route index element={<SMTP />} />
            <Route path="/settings/smtp" element={<SMTP />} />

            <Route path="/settings/add-page" element={<AddPage />} />
            <Route path="/settings/bulk-products" element={<BulkProducts />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
