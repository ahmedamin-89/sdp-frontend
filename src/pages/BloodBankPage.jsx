import React from "react";
import classes from "./Page.module.css";
import BloodStock from "../components/BloodBank/BloodStock";
import styles from "./BloodBankPage.module.css";
import AddStockForm from "../components/BloodBank/AddStockForm";
import RemoveStockForm from "../components/BloodBank/RemoveStockForm";

function BloodBankPage() {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Blood Bank</h2>
      <p>
        Here you can monitor blood stocks, add new donations to inventory, and
        see real-time updates of different blood types.
      </p>
      <div className={styles.container}>
        <BloodStock />
        <AddStockForm />
        <RemoveStockForm />
      </div>
    </div>
  );
}

export default BloodBankPage;
