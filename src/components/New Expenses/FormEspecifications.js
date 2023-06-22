import React from "react";
import "./FormEspecifications.css";

const AddNew = (props) => {
  const stateHandler = () => {
    props.onAddExpense(true);
  };

  return (
    <div>
      <button onClick={stateHandler}>Add New Expense</button>
    </div>
  );
};

export default AddNew;
