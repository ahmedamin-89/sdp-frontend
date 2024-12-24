import React from "react";
import classes from "./EventList.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";

const EventList = ({ selectedType }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.title}>Event List</h1>

        <IoIosAddCircleOutline className={classes.addIcon} />
      </div>
      <div className={classes.eventList}>
        <p>Event 1</p>
      </div>
    </div>
  );
};

export default EventList;
