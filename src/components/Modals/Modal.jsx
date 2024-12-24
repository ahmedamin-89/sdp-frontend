import React from "react";
import Backdrop from "../UI/Backdrop";
import ModalCard from "./ModalCard";
import classes from "./Modal.module.css";

const Modal = ({ closeModal, children, className }) => {
  return (
    <>
      <Backdrop onClick={closeModal} />
      <ModalCard
        closeModal={closeModal}
        className={`${classes.container} ${className}`}
      >
        {children}
      </ModalCard>
    </>
  );
};

export default Modal;
