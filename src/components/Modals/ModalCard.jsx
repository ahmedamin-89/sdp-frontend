import React from "react";
import classes from "./ModalCard.module.css";
import ReactDOM from "react-dom";
const ModalCard = ({ children, className, closeModal }) => {
  function cancelBubble(e) {
    var evt = e ? e : window.event;
    if (evt.stopPropagation) evt.stopPropagation();
    if (evt.cancelBubble != null) evt.cancelBubble = true;
  }
  return ReactDOM.createPortal(
    <div onClick={closeModal} className={classes.container}>
      <div onClick={cancelBubble} className={`${classes.card} ${className}`}>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalCard;
