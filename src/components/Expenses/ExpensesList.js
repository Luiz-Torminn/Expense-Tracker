import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const expenseList = (props) => {
  if (props.expenses.length === 0 && props.optionChosen !== "none") {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  } else if (props.optionChosen === "none") {
    return props.noFilter.map((expense) => (
      <ul className="expenses-list">
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      </ul>
    ));
  }

  return (
    <div>
      <ul className="expenses-list">
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default expenseList;
