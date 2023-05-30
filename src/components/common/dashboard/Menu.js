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
          <img src={menuIcon} alt="dashboard icon" />
        </div>
        <span>{menu}</span>
        <img
          src={
            !showSubmenu
              ? "/icons/dashboard/whiteRight.svg"
              : "/icons/dashboard/whiteDown.svg"
          }
          className="arrow"
          alt="downward arrow"
        />
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
                  <img src={menu.img} alt="dashboard icon" width="20" />
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
