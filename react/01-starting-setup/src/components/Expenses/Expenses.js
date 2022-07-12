import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState("2022");

  function filterChangeHandler(selectedYear) {
    console.log(selectedYear);
    setYear(selectedYear);
  }

  const filteredExpense = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  return (
    <Card className="expenses">
      <ExpenseFilter onChangeFilter={filterChangeHandler} selected={year} />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
}

export default Expenses;
