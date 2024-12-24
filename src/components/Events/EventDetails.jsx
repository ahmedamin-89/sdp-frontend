import React from "react";
import classes from "./EventDetails.module.css";

const EventDetails = ({ id, type, title, date, location, goalAmount }) => {
  return (
    <div>
      <h1 className={classes.title}>Event Details</h1>
      <div className={classes.detailsContainer}>
        <div className={classes.section}>
          <p>Event Title</p>

          <h1>{title}</h1>
        </div>
        <div className={classes.section}>
          <p>Event Date</p>
          <h1>{date}</h1>
        </div>
        <div className={classes.section}>
          <p>Event Location</p>
          <h1>{location}</h1>
        </div>
        <div className={classes.section}>
          <p>Goal Amount</p>
          <h1>{goalAmount}</h1>
        </div>
        <div className={classes.section}>
          <p>Event Type</p>
          <h1>{type}</h1>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
