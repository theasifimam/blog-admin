import React from "react";
import Menu from "../dashboard/Menu";
import { NavLink } from "react-router-dom";

const SideBar = ({ setMenuHover }) => {
  return (
    <nav
      className="navMenu"
      onMouseEnter={() => {
        setMenuHover(false);
      }}
      onMouseLeave={() => {
        setMenuHover(true);
      }}
    >
      <NavLink to="/" className="menu">
        <div className="menuIcon">
          <img
            src="/icons-images/dashboard/dashboardGrey.svg"
            alt="dashboard icon"
            className="menuIcon"
          />
        </div>
        <span>Dashboard</span>
      </NavLink>

      <NavLink to="/monthly-sale" className="menu">
        <div className="menuIcon">
          <img
            src="/icons-images/dashboard/calendarGrey.svg"
            alt="Calendar"
            className="menuIcon"
          />
        </div>
        <span>Monthly Sale</span>
      </NavLink>

      <Menu
        menu="Users List"
        menuLink="/users"
        menuIcon="/icons-images/dashboard/usersGrey.svg"
        submenu={[
          {
            title: "Users",
            link: "/users/admin",
            img: "/icons-images/sidebar/userlist.svg",
            alt: "Admin icon",
          },
          {
            title: "Add ",
            link: "/users/add-user",
            img: "/icons-images/sidebar/adduser.svg",
            alt: "support icon",
          },

          {
            title: "KYC",
            link: "/users/kyc",
            img: "/icons-images/sidebar/kyc.svg",
            alt: "support icon",
          },
          {
            title: "Add KYC",
            link: "/users/add-kyc",
            img: "/icons-images/sidebar/addkyc.svg",
            alt: "buyer icon",
          },
          // {
          //   title: "Seller",
          //   link: "/users/seller",
          //   img: "/icons-images/dashboard/sellerGrey.svg",
          //   alt: "seller icon",
          // },
        ]}
      />
      <Menu
        menu="Products"
        menuLink="/products"
        menuIcon="/icons-images/dashboard/productsGrey.svg"
        submenu={[
          {
            title: "View Products",
            link: "/products/view",
            img: "/icons-images/dashboard/viewProducts.svg",
            alt: "support icon",
          },
          {
            title: "Add",
            link: "/products/add-product",
            img: "/icons-images/dashboard/addProduct.svg",
            alt: "Admin icon",
          },
        ]}
      />
      <Menu
        menu="Coupons"
        menuLink="/coupons"
        menuIcon="/icons-images/dashboard/couponGrey.svg"
        submenu={[
          {
            title: "View Coupon",
            link: "/coupons/view",
            img: "/icons-images/dashboard/viewCoupon.svg",
            alt: "support icon",
          },
          {
            title: "Add Coupon",
            link: "/coupons/add-coupon",
            img: "/icons-images/dashboard/addCoupon.svg",
            alt: "Admin icon",
          },
        ]}
      />

      <Menu
        menu="Orders"
        menuLink="/orders"
        menuIcon="/icons-images/dashboard/ordersGrey.svg"
        submenu={[
          {
            title: "View All",
            link: "/orders/view",
            img: "/icons-images/dashboard/viewAllOrders.svg",
            alt: "Admin icon",
          },
        ]}
      />

      {/* <NavLink to="/settings" className="menu">
    <div className="menuIcon">
      <img
        src="/icons-images/dashboard/settingsGrey.svg"
        alt="dashboard icon"
        className="menuIcon"
      />
    </div>
    <span>Settings</span>
  </NavLink> */}

      <Menu
        menu="Settings"
        menuLink="/settings"
        menuIcon="/icons-images/sidebar/settingpages.svg"
        submenu={[
          {
            title: "SMTP",
            link: "/settings/smtp",
            img: "/icons-images/sidebar/smtp.svg",
            alt: "Admin icon",
          },
          {
            title: "CMS",
            link: "/settings/pages",
            img: "/icons-images/sidebar/CMS.svg",
            alt: "Admin icon",
          },
          {
            title: "Add Page",
            link: "/settings/add-page",
            img: "/icons-images/sidebar/addcms.svg",
            alt: "Admin icon",
          },
          {
            title: "Bulk Users",
            link: "/settings/bulk-users",
            img: "/icons-images/sidebar/Bulkusers.svg",
            alt: "Admin icon",
          },
          {
            title: "Bulk Products",
            link: "/settings/bulk-products",
            img: "/icons-images/sidebar/bulkprodutcs.svg",
            alt: "Admin icon",
          },
        ]}
      />
    </nav>
  );
};

export default SideBar;
