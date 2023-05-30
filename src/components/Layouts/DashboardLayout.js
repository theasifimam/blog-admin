import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Menu from "../common/dashboard/Menu";
import "../../styles/DashboardLayout.css";

const DashboardLayout = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [menuHover, setMenuHover] = useState(false);

  return (
    <div
      className="dashboardContainer"
      style={{ paddingLeft: toggleMenu && menuHover ? "50px" : "277px" }}
    >
      <div
        className="leftSide"
        style={{ width: toggleMenu && menuHover ? "65px" : "277px" }}
        onMouseEnter={() => {
          setMenuHover(false);
        }}
        onMouseLeave={() => {
          setMenuHover(true);
        }}
      >
        <div className="logo">
          <Link to="/">
            <img src="/icons/logo.png" alt="logo-sabkimandi" width="150" />
          </Link>
        </div>

        <nav className="navMenu">
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
          <Menu
            menu="Users List"
            menuLink="/users"
            menuIcon="/icons/dashboard/usersGrey.svg"
            submenu={[
              {
                title: "Admin",
                link: "/users/admin",
                img: "/icons/dashboard/dashboardGrey.svg",
                alt: "Admin icon",
              },
              {
                title: "Support",
                link: "/users/support",
                img: "/icons/dashboard/supportGrey.svg",
                alt: "support icon",
              },
              {
                title: "Buyer",
                link: "/users/buyer",
                img: "/icons/dashboard/buyerGrey.svg",
                alt: "buyer icon",
              },
              {
                title: "Seller",
                link: "/users/seller",
                img: "/icons/dashboard/sellerGrey.svg",
                alt: "seller icon",
              },
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
                title: "Add Coupon",
                link: "/coupons/add",
                img: "/icons/dashboard/addCoupon.svg",
                alt: "Admin icon",
              },
              {
                title: "View Coupon",
                link: "/coupons/view",
                img: "/icons/dashboard/viewCoupon.svg",
                alt: "support icon",
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

          <NavLink to="/settings" className="menu">
            <div className="menuIcon">
              <img
                src="/icons/dashboard/settingsGrey.svg"
                alt="dashboard icon"
                className="menuIcon"
              />
            </div>
            <span>Settings</span>
          </NavLink>
        </nav>
      </div>
      <div className="rightSide">
        <div className="dashHeader">
          <div className="left">
            <div className="left">
              <div className="icon" onClick={() => setToggleMenu(!toggleMenu)}>
                <img
                  src="/icons/dashboard/dashboardGreen.svg"
                  alt="dashboard icon"
                />
              </div>
              <span>Dashboard Work</span>
            </div>
            <div className="right">
              <div className="icon">
                <img src="/icons/dashboard/CalenderGreen.svg" alt="calendar" />
              </div>
              <span className="date">2nd April, Wednesday 2022</span>
              <div className="icon user">
                <img src="/images/user.png" alt="user" width="100" />
              </div>
              <div className="icon">
                <img src="/icons/dashboard/menu.svg" alt="bell" />
              </div>
            </div>
          </div>
        </div>
        <div className="page-container">
          <Outlet />
        </div>
        <footer>
          <p>
            Copyright &#169; 2023-2027 <a>SabkiMandi.com</a> All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
