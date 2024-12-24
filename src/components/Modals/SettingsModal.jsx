import React from "react";
import Modal from "./Modal";
import classes from "./SettingsModal.module.css";

const SettingsModal = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal} className={classes.container}>
      <div className={classes.singleItemContainer}>
        <h2>Settings</h2>
      </div>
      <div className={classes.multipleItemsContainer}>
        <div className={classes.item}>Main Court</div>
        <div className={classes.item}>Edit Timeslots</div>
        <div className={classes.item}>Language</div>
        <div className={classes.item}>Logout</div>
      </div>
    </Modal>
  );
};

export default SettingsModal;
