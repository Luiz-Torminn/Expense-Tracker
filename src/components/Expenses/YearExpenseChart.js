import React from "react";
import Chart from "../Charts/Chart";

const YearExpenseChart = (props) => {
  const chartDataPoints = [
    { label: "2019", value: 0 },
    { label: "2020", value: 0 },
    { label: "2021", value: 0 },
    { label: "2022", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseYear = expense.date.getYear();
    if (expenseYear === 119) {
      chartDataPoints[0].value += expense.amount;
    } else if (expenseYear === 120) {
      chartDataPoints[1].value += expense.amount;
    } else if (expenseYear === 121) {
      chartDataPoints[2].value += expense.amount;
    } else {
      chartDataPoints[3].value += expense.amount;
    }
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default YearExpenseChart;
