import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, isOpen, setIsOpen, style }) => {
  const overlayRef = useRef(null);

  const handleCloseOverlay = () => {
    setIsOpen(false);
  };

  // Attach mousedown event listener to the document to check for clicks outside the overlay
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        handleCloseOverlay();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return isOpen
    ? ReactDOM.createPortal(
        <div className="overlayBG">
          <div className="overlay" ref={overlayRef} style={style}>
            <button className="close" onClick={handleCloseOverlay}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="modalInner">{children}</div>
          </div>
        </div>,
        document.getElementById("overlays")
      )
    : null;
};

export default Modal;
