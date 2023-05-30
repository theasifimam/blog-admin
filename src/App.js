import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/authentication/Login";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import AuthLayout from "./components/Layouts/AuthLayout";
import DashboardLayout from "./components/Layouts/DashboardLayout";
import AdminUsers from "./pages/users/AdminUsers";
import SupportUsers from "./pages/users/SupportUsers";
import BuyerUsers from "./pages/users/BuyerUsers";
import SellerUsers from "./pages/users/SellerUsers";
import MonthlySale from "./pages/MonthlySale";
import Settings from "./pages/Settings";
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
            <Route path="/users/support" element={<SupportUsers />} />
            <Route path="/users/buyer" element={<BuyerUsers />} />
            <Route path="/users/seller" element={<SellerUsers />} />
            <Route path="/users/add-user" element={<AddUser />} />
            <Route path="/users/view/:id" element={<UserDetail />} />
            <Route path="/users/update-user/:id" element={<UpdateUser />} />
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
            <Route index element={<AddCoupon />} />
            <Route path="/coupons/add" element={<AddCoupon />} />
            <Route path="/coupons/view" element={<ViewCoupon />} />
          </Route>

          {/* Orders */}
          <Route path="/orders">
            <Route index element={<ViewAllOrders />} />
            <Route path="/orders/view" element={<ViewAllOrders />} />
          </Route>

          <Route path="/monthly-sale" element={<MonthlySale />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
