import React, { useState } from "react";
import NewUser from "./components/NewUser";
import "./App.css";
import MemberLists from "./components/MemberList";

function App() {
  const [members, setMembers] = useState([]);

  function newMemberHandler(enteredMember) {
    console.log(enteredMember);
    setMembers((prevState) => {
      return [enteredMember, ...prevState];
    });
  }

  function deleteMember(id) {
    setMembers((prevState) => {
      return prevState.filter((mem) => mem.key !== id);
    });
  }

  let content = members.map((mem) => (
    <MemberLists onDelete={deleteMember} mem={mem} key={mem.key} />
  ));

  return (
    <div className="App">
      <NewUser onSubmitMember={newMemberHandler}></NewUser>
      {content}
    </div>
  );
}

export default App;
