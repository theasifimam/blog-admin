import React, { useState } from "react";
import Modal from "./Overlay";
import { useDispatch } from "react-redux";
import { getToken } from "../../../utils/utils";
import { logoutAction } from "../../../redux/slice/auth/logoutSlice";

const MenuControls = ({ backdrop, modal, onClose, style }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction(getToken()));
  };
  return (
    <Modal backdrop={backdrop} modal={modal} onClose={onClose} style={style}>
      <ul className="menuControls">
        <li>
          <i className="fa-solid fa-user"></i> Profile
        </li>
        <li>
          <i className="fa-solid fa-palette"></i> Theme
        </li>
        <li>
          <i className="fa-solid fa-lock"></i> Password
        </li>
        <li onClick={handleLogout}>
          {" "}
          <i className="fa-solid fa-right-from-bracket"></i> Log Out
        </li>
      </ul>
    </Modal>
  );
};

export default MenuControls;
