import React, { useState } from "react";
import "./NewUser.css";

function NewUser(props) {
  const [content, setContent] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  function nameHandler(event) {
    setEnteredName(event.target.value);
    console.log(event.target.value);
  }

  function ageHandler(event) {
    setEnteredAge(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    if (+enteredAge < 0) {
      setContent("음수를 입력할 수 없습니다.");
      return;
    }
    setContent("");
    const newPerson = {
      name: enteredName,
      age: +enteredAge,
      key: Math.random().toString(),
    };
    props.onSubmitMember(newPerson);
    setEnteredAge("");
    setEnteredName("");
  }

  return (
    <form className="form-control" onSubmit={submitHandler}>
      <div>
        <label htmlFor="name-form">Username</label>
        <input
          type="text"
          id="name-form"
          onChange={nameHandler}
          value={enteredName}
        ></input>
      </div>
      <div>
        <label htmlFor="age-form">Age (Years)</label>
        <input
          type="number"
          id="age-form"
          onChange={ageHandler}
          value={enteredAge}
        ></input>
      </div>
      <div className="form-button">
        <button type="submit">Add User</button>
      </div>
      <div>{content}</div>
    </form>
  );
}

export default NewUser;
