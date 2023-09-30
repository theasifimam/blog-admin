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
import AddPage from "./pages/settings/AddPage";
import Users from "./pages/users/Users";
import Reports from "./pages/submitted/Reports";
import Feedback from "./pages/submitted/Feedback";

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

          <Route path="/submitted">
            <Route index element={<Reports />} />
            <Route path="/submitted/reports" element={<Reports />} />
            <Route path="/submitted/feedback" element={<Feedback />} />
          </Route>

          <Route path="/monthly-sale" element={<MonthlySale />} />
          <Route path="/settings">
            <Route path="/settings/add-page" element={<AddPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
