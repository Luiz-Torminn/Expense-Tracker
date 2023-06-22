import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const optionSelectHandler = (event) => {
    const optionValue = event.target.value.toString();
    props.onSelectOption(optionValue);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={optionSelectHandler} value={props.selected}>
          <option value="none">All</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
