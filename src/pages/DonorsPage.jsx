import React from "react";
import classes from "./Page.module.css";

const DonorsPage = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Donors</h2>
      <p>View donor info, donation history, and upcoming donation schedules.</p>
      {/* Replace with donor list or search functionality */}
    </div>
  );
};

export default DonorsPage;
