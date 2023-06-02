import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/responsive.css";
import "./styles/Users.css";
import Login from "./pages/authentication/Login";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import AuthLayout from "./components/Layouts/AuthLayout";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import AdminUsers from "./pages/users/AdminUsers";
import MonthlySale from "./pages/MonthlySale";
import AddProduct from "./pages/products/AddProduct";
import ViewAllProducts from "./pages/products/ViewAllProducts";
import AddCoupon from "./pages/coupons/AddCoupon";
import ViewCoupon from "./pages/coupons/ViewCoupon";
import ViewAllOrders from "./pages/orders/ViewAllOrders";
import AddUser from "./pages/users/AddUser";
import UpdateUser from "./pages/users/UpdateUser";
import UserDetail from "./pages/users/UserDetail";
import ViewProductDetail from "./pages/products/ViewProductDetail";
import UpdateProduct from "./pages/products/UpdateProduct";
import ViewCouponDetail from "./pages/coupons/ViewCouponDetail";
import UpdateCoupon from "./pages/coupons/UpdateCoupon";
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
            <Route index element={<AdminUsers />} />
            <Route path="/users/admin" element={<AdminUsers />} />
            <Route path="/users/add-user" element={<AddUser />} />
            <Route path="/users/view/:id" element={<UserDetail />} />
            <Route path="/users/update-user/:id" element={<UpdateUser />} />
            <Route path="/users/kyc" element={<AllKYCs />} />
            <Route path="/users/add-kyc" element={<KYC />} />
            <Route path="/users/update-kyc/:id" element={<UpdateKYC />} />
            <Route path="/users/view-kyc/:id" element={<ViewKYC />} />
          </Route>

          {/* Products */}
          <Route path="/products">
            <Route index element={<ViewAllProducts />} />
            <Route path="/products/add-product" element={<AddProduct />} />
            <Route path="/products/view" element={<ViewAllProducts />} />
            <Route path="/products/view/:id" element={<ViewProductDetail />} />
            <Route
              path="/products/update-product/:id"
              element={<UpdateProduct />}
            />
          </Route>

          {/* Coupons */}
          <Route path="/coupons">
            <Route index element={<ViewCoupon />} />
            <Route path="/coupons/add-coupon" element={<AddCoupon />} />
            <Route path="/coupons/view" element={<ViewCoupon />} />
            <Route path="/coupons/view/:id" element={<ViewCouponDetail />} />
            <Route
              path="/coupons/update-coupon/:id"
              element={<UpdateCoupon />}
            />
          </Route>

          {/* Orders */}
          <Route path="/orders">
            <Route index element={<ViewAllOrders />} />
            <Route path="/orders/view" element={<ViewAllOrders />} />
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
