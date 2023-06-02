import React from "react";
import { getFormattedDate } from "../../../utils/utils";
import classes from "../../../styles/styleModules/Modal.module.css";
import MenuControls from "./MenuControls";

const DashHeader = ({
  setToggleMenu,
  setShowModal,
  showModal,
  toggleMenu,
  hideModal,
}) => {
  return (
    <div
      className={toggleMenu ? "dashHeader collapsed" : "dashHeader Uncollapsed"}
    >
      <div className="left">
        <div className="left">
          <div className="icon" onClick={() => setToggleMenu(!toggleMenu)}>
            <img
              src="/icons/dashboard/dashboardGreen.svg"
              alt="dashboard icon"
            />
          </div>
          <span className="dNone">Dashboard Work</span>
        </div>
        <div className="right">
          <div className="icon dNone">
            <img src="/icons/dashboard/CalenderGreen.svg" alt="calendar" />
          </div>
          <span className="date dNone">{getFormattedDate(new Date())}</span>
          <div className="icon user">
            <img src="/images/user.png" alt="user" width="100" />
          </div>
          <div className="icon" onClick={() => setShowModal(true)}>
            <img src="/icons/dashboard/menu.svg" alt="bell" />
          </div>
          {showModal && (
            <MenuControls
              backdrop={classes.backdrop}
              modal={classes.modal}
              onClose={hideModal}
              style={{ right: "10px", top: "90px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
