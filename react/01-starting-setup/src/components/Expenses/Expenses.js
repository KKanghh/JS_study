import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
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

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpense.length > 0) {
    expensesContent = filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ));
  }
  
  return (
    <Card className="expenses">
      <ExpenseFilter onChangeFilter={filterChangeHandler} selected={year} />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
