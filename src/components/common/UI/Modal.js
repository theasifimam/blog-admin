import React from "react";
import "../../../styles/UI.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ backdrop, onClose }) => {
  return <div className={backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ modal, style, children }) => {
  return (
    <div style={style} className={modal}>
      {children}
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ onClose, backdrop, modal, content, children, style }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} backdrop={backdrop} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay style={style} modal={modal} content={content}>
          {children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
