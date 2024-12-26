import React from "react";
import classes from "./RevenueBar.module.css";

const RevenueBar = ({ height }) => {
  return <div className={classes.bar} style={{ height: `${height}%` }} />;
};

export default RevenueBar;
