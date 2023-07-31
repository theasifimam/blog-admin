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
        menu="Appointments"
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
        menu="Status"
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
        menu="To do"
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
        menu="Complains"
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
        menu="Controls"
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
