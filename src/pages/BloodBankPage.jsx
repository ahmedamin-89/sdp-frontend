import React from "react";
import classes from "./Page.module.css";

function BloodBankPage() {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Blood Bank</h2>
      <p>
        Here you can monitor blood stocks, add new donations to inventory, and
        see real-time updates of different blood types.
      </p>
      {/* Replace with your actual content or components */}
    </div>
  );
}

export default BloodBankPage;
