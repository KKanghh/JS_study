import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setHidden(<button onClick={buttonClickHandler}>Add New Expense</button>);
  }

  function buttonClickHandler() {
    setHidden(
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelHandler}
      />
    );
  }

  function cancelHandler() {
    setHidden(<button onClick={buttonClickHandler}>Add New Expense</button>);
  }

  const [hidden, setHidden] = useState(
    <button onClick={buttonClickHandler}>Add New Expense</button>
  );

  return <div className="new-expense">{hidden}</div>;
}

export default NewExpense;
