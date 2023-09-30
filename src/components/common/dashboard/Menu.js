import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Menu = ({ menu, submenu, menuIcon, menuLink }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <NavLink
        to={menuLink}
        className="menu multi-menu"
        onClick={() => setShowSubmenu((value) => !value)}
      >
        <div className="menuIcon">
          <i className={menuIcon}></i>
        </div>
        <span>{menu}</span>

        <i
          className={
            !showSubmenu
              ? "fa-solid fa-angle-right arrow"
              : "fa-solid fa-chevron-down arrow"
          }
        ></i>
      </NavLink>
      {showSubmenu ? (
        <div className="subMenu">
          {submenu?.map((menu, index) => {
            return (
              <NavLink
                to={menu.link}
                key={index}
                className={pathname === menuLink && index === 0 ? "active" : ""}
              >
                <div className="menuIcon">
                  <i className={menu.img}></i>
                </div>
                <span>{menu.title}</span>
              </NavLink>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Menu;
