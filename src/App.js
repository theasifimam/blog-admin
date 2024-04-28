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
import AddPage from "./pages/settings/AddPage";
import Users from "./pages/users/Users";
import Reports from "./pages/submitted/Reports";
import Feedback from "./pages/submitted/Feedback";
import FullCalendar from "./pages/calendar/FullCalendar";
import Settings from "./pages/settings/Settings";
import PrivateRoutes, { PublicRoutes } from "./utils/routes";
import { useEffect } from "react";
import { toggleDarkmode } from "./utils/utils";

function App() {
  useEffect(() => {
    toggleDarkmode("on");
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route element={<DashboardLayout />}>
            <Route exact path="/" element={<Dashboard />} />

            {/* Users */}
            <Route path="/users">
              <Route index element={<Users />} />
              <Route path="/users/admin" element={<Users />} />
            </Route>

            <Route path="/submitted">
              <Route index element={<Reports />} />
              <Route path="/submitted/reports" element={<Reports />} />
              <Route path="/submitted/feedback" element={<Feedback />} />
            </Route>

            <Route path="/calendar" element={<FullCalendar />} />

            <Route path="/monthly-sale" element={<MonthlySale />} />
            <Route path="/settings">
              <Route path="/settings/add-page" element={<AddPage />} />
              <Route path="/settings/settings" element={<Settings />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
