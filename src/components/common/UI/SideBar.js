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
        <h1 className="main-heading">{process.env.REACT_APP_SITE_NAME}</h1>
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

      <Menu
        menu="Users"
        menuLink="/users"
        menuIcon="fa-solid fa-users"
        submenu={[
          {
            title: "Users",
            link: "/users/admin",
            img: "fa-solid fa-users",
            alt: "Admin icon",
          },
          {
            title: "Add ",
            link: "/users/add-user",
            img: "fa-solid fa-user-plus",
            alt: "support icon",
          },
        ]}
      />

      <Menu
        menu="Submitted"
        menuLink="/submitted"
        menuIcon="fa-solid fa-users"
        submenu={[
          {
            title: "Reports",
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
