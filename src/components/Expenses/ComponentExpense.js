/* eslint-disable eqeqeq */
import "./ComponentExpense.css";
import Card from "../UI/Card";
import ExpensesFilter from "../Expense Filter/ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpensesList";
import ChartDisplay from "../Charts/ChartDisplay";

const NewExpenses = (props) => {
  const [year, setYear] = useState("none");
  const filterChangeHandler = (yearSelected) => {
    setYear(yearSelected);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  const nonFilteredExpense = [...props.items];

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onSelectOption={filterChangeHandler} />
        <ChartDisplay
          filterValue={year}
          expenses={filteredExpense}
          allExpenses={nonFilteredExpense}
        />
        <ExpenseList
          expenses={filteredExpense}
          optionChosen={year}
          noFilter={nonFilteredExpense}
        />
      </Card>
    </div>
  );
};

export default NewExpenses;
