import React, { useState } from "react";
import classes from "./RemoveStockForm.module.css";

const RemoveStockForm = ({ onRemoveStock }) => {
  const [type, setType] = useState("A+");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRemoveStock(type, parseInt(quantity, 10));
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <h3>Remove Stock</h3>
      <div className={classes.formGroup}>
        <label htmlFor="bloodType">Blood Type:</label>
        <select
          id="bloodType"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>O+</option>
          <option>O-</option>
          <option>AB+</option>
          <option>AB-</option>
        </select>
      </div>

      <div className={classes.formGroup}>
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <button type="submit" className={classes.btn}>
        Remove
      </button>
    </form>
  );
};

export default RemoveStockForm;
