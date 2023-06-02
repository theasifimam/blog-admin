import React, { useState } from "react";
import Modal from "./Modal";

const MenuControls = ({ backdrop, modal, onClose, style }) => {
  return (
    <Modal backdrop={backdrop} modal={modal} onClose={onClose} style={style}>
      <ul className="menuControls">
        <li>My Profile</li>
        <li>Change Password</li>
        <li>Log Out</li>
      </ul>
    </Modal>
  );
};

export default MenuControls;
