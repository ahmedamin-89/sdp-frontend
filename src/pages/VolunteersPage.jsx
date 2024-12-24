import React from "react";
import classes from "./Page.module.css";

const VolunteersPage = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Volunteers</h2>
      <p>
        Manage volunteer information, availability, and assign specific skills
        like Driving or Nursing.
      </p>
      {/* Replace with a volunteer list or volunteer skill assignment UI */}
    </div>
  );
};

export default VolunteersPage;
