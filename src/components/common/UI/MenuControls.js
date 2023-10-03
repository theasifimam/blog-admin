import React, { useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { signoutAction } from "../../../redux/slice/auth/signoutSlice";
import { getToken } from "../../../utils/utils";

const MenuControls = ({ backdrop, modal, onClose, style }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signoutAction(getToken()));
  };
  return (
    <Modal backdrop={backdrop} modal={modal} onClose={onClose} style={style}>
      <ul className="menuControls">
        <li>
          <i class="fa-solid fa-lock"></i> Profile
        </li>
        <li>
          <i class="fa-solid fa-lock"></i> Theme
        </li>
        <li>
          <i class="fa-solid fa-lock"></i> Password
        </li>
        <li onClick={handleLogout}>
          {" "}
          <i class="fa-solid fa-right-from-bracket"></i> Log Out
        </li>
      </ul>
    </Modal>
  );
};

export default MenuControls;
