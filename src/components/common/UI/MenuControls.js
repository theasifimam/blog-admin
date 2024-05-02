import React, { useState } from "react";
import Modal from "./Overlay";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../redux/slice/auth/logoutSlice";
import { viewUserAction } from "../../../redux/slice/user/viewUserSlice";
import { getMyself, getToken } from "../../../utils/utils";
import UserForm from "../../../pages/users/UserForm";

const MenuControls = ({ backdrop, modal, onClose, style }) => {
  const dispatch = useDispatch();
  const [showProfile, setShowProfile] = useState(false);
  const myself = getMyself();

  const handleLogout = () => {
    dispatch(logoutAction(getToken()));
  };
  return (
    <Modal backdrop={backdrop} modal={modal} onClose={onClose} style={style}>
      <ul className="menuControls">
        <li
          onClick={() => {
            setShowProfile(true);
            dispatch(viewUserAction(myself?._id));
          }}
        >
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

      {showProfile && (
        <UserForm
          setIsOpen={setShowProfile}
          onClose={() => setShowProfile(false)}
          isOpen={showProfile}
          type="view"
          title="Profile"
        />
      )}
    </Modal>
  );
};

export default MenuControls;
