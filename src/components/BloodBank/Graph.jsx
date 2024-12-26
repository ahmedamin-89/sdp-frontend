import React, { useEffect, useState } from "react";
import classes from "./Graph.module.css";
import RevenueBar from "./RevenueBar"; // can be renamed, but we’ll reuse it

const Graph = ({
  bloodAmount = {
    "A+": 12,
    "A-": 8,
    "B+": 5,
    "O+": 20,
    "O-": 3,
    "AB+": 2,
    "AB-": 1,
  },
}) => {
  // data array to store each blood type and a normalized (0-1) value
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!bloodAmount) return;

    // Find the largest quantity among all blood types
    const maxValue = Math.max(...Object.values(bloodAmount));

    // Convert { "A+": 12, "B+": 5, ... } into an array
    // and normalize each quantity to 0-1 scale
    const newData = Object.entries(bloodAmount).map(
      ([bloodType, quantity]) => ({
        type: bloodType,
        normalized: quantity / maxValue, // 0-1
        rawValue: quantity,
      })
    );

    setData(newData);
  }, [bloodAmount]);

  return (
    <div className={classes.container}>
      {/* Y-axis labels (still representing 100%, 75%, 50%, 25%) */}
      <div className={classes.YAxis}>
        <p>100%</p>
        <p>75%</p>
        <p>50%</p>
        <p>25%</p>
        <p></p>
      </div>

      <div className={classes.line} />

      {/* X-axis with bars for each blood type */}
      <div className={classes.XAxis}>
        {data.map((item, index) => (
          <div key={index} className={classes.XAxisBar}>
            {/* Multiply normalized by 100 to get a percentage for the bar height */}
            <RevenueBar height={item.normalized * 100} />
            <p>{item.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graph;
