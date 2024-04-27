import React from "react";
import { getCurrentUserLT, getFormattedDate } from "../../../utils/utils";
import classes from "../../../styles/styleModules/Modal.module.css";
import MenuControls from "./MenuControls";

const DashHeader = ({
  setToggleMenu,
  setShowModal,
  showModal,
  toggleMenu,
  hideModal,
}) => {
  const myself = getCurrentUserLT();
  return (
    <div
      className={toggleMenu ? "dashHeader collapsed" : "dashHeader Uncollapsed"}
    >
      <div className="left">
        <div className="left">
          <div className="icon" onClick={() => setToggleMenu(!toggleMenu)}>
            <i
              class={
                toggleMenu
                  ? "fa-solid fa-angles-right"
                  : "fa-solid fa-angles-left"
              }
            ></i>
          </div>
          <span className="dNone">Mazlis</span>
        </div>
        <div className="right">
          <div className="icon dNone">
            <i class="fa-solid fa-calendar-days"></i>
          </div>
          <span className="date dNone">{getFormattedDate(new Date())}</span>
          {/* <div className="icon">
            <i className="fa-solid fa-bars"></i>
          </div> */}
          <div className="icon user" onClick={() => setShowModal(true)}>
            <img
              src={myself?.profilePicture || "/images/user.png"}
              alt="user"
              width="100"
            />
          </div>
          {showModal && (
            <MenuControls
              backdrop={classes.backdrop}
              modal={classes.modal}
              onClose={hideModal}
              style={{
                right: "50px",
                top: "70px",
                borderRadius: "20px",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
