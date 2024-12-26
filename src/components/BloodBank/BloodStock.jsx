import React from "react";
import classes from "./BloodStock.module.css";
import DarkCard from "../UI/DarkCard";
import Graph from "./Graph";

const BloodStock = ({ bloodAmount }) => {
  return (
    <DarkCard className={classes.container}>
      <div className={classes.header}>
        <h1>Blood Inventory</h1>
      </div>
      {/* 
        We pass the `bloodAmount` object to our Graph.
        For example:
        { "A+": 12, "A-": 8, ... }
      */}
      <Graph bloodAmount={bloodAmount} />
    </DarkCard>
  );
};

export default BloodStock;
