import React from "react";
import classes from "./Page.module.css";

const EventsPage = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Events</h2>
      <p>
        Browse and manage upcoming events such as Fundraisers, Workshops, and
        Outreach programs.
      </p>
      {/* Replace with event list or event creation form */}
    </div>
  );
};

export default EventsPage;
