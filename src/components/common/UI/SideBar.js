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
            src="/icons/dashboard/dashboardGrey.svg"
            alt="dashboard icon"
            className="menuIcon"
          />
        </div>
        <span>Dashboard</span>
      </NavLink>

      <NavLink to="/monthly-sale" className="menu">
        <div className="menuIcon">
          <img
            src="/icons/dashboard/calendarGrey.svg"
            alt="Calendar"
            className="menuIcon"
          />
        </div>
        <span>Monthly Sale</span>
      </NavLink>

      <Menu
        menu="Users List"
        menuLink="/users"
        menuIcon="/icons/dashboard/usersGrey.svg"
        submenu={[
          {
            title: "Users",
            link: "/users/admin",
            img: "/icons/sidebar/userlist.svg",
            alt: "Admin icon",
          },
          {
            title: "Add ",
            link: "/users/add-user",
            img: "/icons/sidebar/adduser.svg",
            alt: "support icon",
          },

          {
            title: "KYC",
            link: "/users/kyc",
            img: "/icons/sidebar/kyc.svg",
            alt: "support icon",
          },
          {
            title: "Add KYC",
            link: "/users/add-kyc",
            img: "/icons/sidebar/addkyc.svg",
            alt: "buyer icon",
          },
          // {
          //   title: "Seller",
          //   link: "/users/seller",
          //   img: "/icons/dashboard/sellerGrey.svg",
          //   alt: "seller icon",
          // },
        ]}
      />
      <Menu
        menu="Products"
        menuLink="/products"
        menuIcon="/icons/dashboard/productsGrey.svg"
        submenu={[
          {
            title: "View Products",
            link: "/products/view",
            img: "/icons/dashboard/viewProducts.svg",
            alt: "support icon",
          },
          {
            title: "Add",
            link: "/products/add-product",
            img: "/icons/dashboard/addProduct.svg",
            alt: "Admin icon",
          },
        ]}
      />
      <Menu
        menu="Coupons"
        menuLink="/coupons"
        menuIcon="/icons/dashboard/couponGrey.svg"
        submenu={[
          {
            title: "View Coupon",
            link: "/coupons/view",
            img: "/icons/dashboard/viewCoupon.svg",
            alt: "support icon",
          },
          {
            title: "Add Coupon",
            link: "/coupons/add-coupon",
            img: "/icons/dashboard/addCoupon.svg",
            alt: "Admin icon",
          },
        ]}
      />

      <Menu
        menu="Orders"
        menuLink="/orders"
        menuIcon="/icons/dashboard/ordersGrey.svg"
        submenu={[
          {
            title: "View All",
            link: "/orders/view",
            img: "/icons/dashboard/viewAllOrders.svg",
            alt: "Admin icon",
          },
        ]}
      />

      {/* <NavLink to="/settings" className="menu">
    <div className="menuIcon">
      <img
        src="/icons/dashboard/settingsGrey.svg"
        alt="dashboard icon"
        className="menuIcon"
      />
    </div>
    <span>Settings</span>
  </NavLink> */}

      <Menu
        menu="Settings"
        menuLink="/settings"
        menuIcon="/icons/sidebar/settingpages.svg"
        submenu={[
          {
            title: "SMTP",
            link: "/settings/smtp",
            img: "/icons/sidebar/smtp.svg",
            alt: "Admin icon",
          },
          {
            title: "CMS",
            link: "/settings/pages",
            img: "/icons/sidebar/CMS.svg",
            alt: "Admin icon",
          },
          {
            title: "Add Page",
            link: "/settings/add-page",
            img: "/icons/sidebar/addcms.svg",
            alt: "Admin icon",
          },
          {
            title: "Bulk Users",
            link: "/settings/bulk-users",
            img: "/icons/sidebar/Bulkusers.svg",
            alt: "Admin icon",
          },
          {
            title: "Bulk Products",
            link: "/settings/bulk-products",
            img: "/icons/sidebar/bulkprodutcs.svg",
            alt: "Admin icon",
          },
        ]}
      />
    </nav>
  );
};

export default SideBar;
