import React, { useState } from "react";
import AddUser from "./components/NewUser/AddUser";
import UsersList from "./components/NewUser/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const newUserHandler = (user) => {
    setUsers((prevState) => {
      return [user, ...prevState];
    });
  };

  const deleteUserHandler = (id) => {
    console.log(id);
  };
  return (
    <div>
      <AddUser onNewUser={newUserHandler} />
      <UsersList users={users} onClick={deleteUserHandler} />
    </div>
  );
}

export default App;
