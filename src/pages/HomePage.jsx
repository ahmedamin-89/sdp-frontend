import React from "react";
import classes from "./Page.module.css";

function HomePage() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Home Page</h1>
      <p>Welcome to the Blood Bank Management System</p>
    </div>
  );
}

export default HomePage;
