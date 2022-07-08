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

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeFilter={filterChangeHandler} selected={year} />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
