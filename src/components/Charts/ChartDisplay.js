import React from "react";
import YearExpense from "../Expenses/YearExpenseChart";
import ExpensesChart from "../Expenses/ExpensesChart";

const ChartDisplay = (props) => {
  if (props.filterValue === "none") {
    return <YearExpense expenses={props.allExpenses} />;
  } else {
    return <ExpensesChart expenses={props.expenses} />;
  }
};
export default ChartDisplay;
