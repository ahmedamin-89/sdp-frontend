import React from "react";
import classes from "./DarkCard.module.css";

const DarkCard = ({ children, className }) => {
  return <div className={`${classes.container} ${className} `}>{children}</div>;
};

export default DarkCard;
