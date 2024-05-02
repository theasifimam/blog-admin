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
      <div className="logo-box">
        {/* <p className="logo"></p> */}
        <img className="logo" src="/circularlogo.svg" alt="logo" />
        <h1 className="main-heading" style={{ marginBottom: 0 }}>
          {process.env.REACT_APP_SITE_NAME}
        </h1>
      </div>
      <NavLink to="/" className="menu">
        <div className="menuIcon">
          <i class="fa-solid fa-tower-observation"></i>
        </div>
        <span>Dashboard</span>
      </NavLink>

      <NavLink to="/monthly-sale" className="menu">
        <div className="menuIcon">
          <i class="fa-regular fa-calendar-days"></i>
        </div>
        <span>Graph</span>
      </NavLink>

      <NavLink to="/users" className="menu">
        <div className="menuIcon">
          <i class="fa-solid fa-users"></i>
        </div>
        <span>Users</span>
      </NavLink>

      <Menu
        menu="Support"
        menuLink="/support"
        menuIcon="fa-solid fa-users"
        submenu={[
          {
            title: "Complains",
            link: "/submitted/reports",
            img: "fa-solid fa-users",
            alt: "Admin icon",
          },
          {
            title: "Feedbacks",
            link: "/submitted/feedback",
            img: "fa-solid fa-user-plus",
            alt: "support icon",
          },
        ]}
      />

      <Menu
        menu="Settings"
        menuLink="/settings"
        menuIcon="fa-solid fa-gears"
        submenu={[
          {
            title: "Add Page",
            link: "/settings/add-page",
            img: "fa-solid fa-gears",
            alt: "Admin icon",
          },
          {
            title: "Settings",
            link: "/settings/settings",
            img: "fa-solid fa-gears",
            alt: "settings icon",
          },
        ]}
      />
    </nav>
  );
};

export default SideBar;
