import React from "react";
import classes from "./EventTypeSelector.module.css";

const EventTypeSelector = ({ selectedType, setSelectedType }) => {
  const EVENT_TYPES = ["Fundraiser", "Workshop", "Outreach"];
  return (
    <div className={classes.container}>
      {EVENT_TYPES.map((type) => (
        <div
          className={`${classes.button} ${
            selectedType == type && classes.selected
          }`}
          key={type}
          onClick={() => setSelectedType(type)}
        >
          {type}
        </div>
      ))}
    </div>
  );
};

export default EventTypeSelector;
