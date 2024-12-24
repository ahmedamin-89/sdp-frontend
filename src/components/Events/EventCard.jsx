import React from "react";
import classes from "./EventCard.module.css";
import { FaCircleChevronRight } from "react-icons/fa6";

const EventCard = ({ id, type, title, date, location, goalAmount }) => {
  return (
    <div key={id} className={classes.container}>
      <h3>{title}</h3>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      {/* Additional fields if you want:
     {goalAmount && <p>Goal: ${goalAmount}</p>}
     {maxAttendees && <p>Max Attendees: {maxAttendees}</p>}
     etc.
  */}
      <FaCircleChevronRight className={classes.icon} />
    </div>
  );
};

export default EventCard;
