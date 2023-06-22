import React, { useState } from "react";
import ExpenseForm from "./NewForm";
import "./NewExpenses.css";
import AddNew from "./FormEspecifications";

const NewExpense = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const saveExpenseDataHandler = (callDataExpeses) => {
    const expenseData = {
      id: `e${Math.round(Math.random() * 999).toString()}`,
      ...callDataExpeses,
    };
    props.onAddExpense(expenseData);
  };

  const mountHandler = (state) => {
    setIsOpen(state);
  };

  if (isOpen === true) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancelFalse={mountHandler}
        />
      </div>
    );
  }

  return (
    <div className="new-expense">
      <AddNew onAddExpense={mountHandler} />
    </div>
  );
};

export default NewExpense;
