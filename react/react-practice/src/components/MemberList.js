import React from "react";

import "./MemberList.css";
function MemberLists(props) {
  function deleteMember() {
    props.onDelete(props.mem.key);
  }

  return (
    <div className="member-list" onClick={deleteMember}>
      <p>{props.mem.name}</p>
      <p>{props.mem.age}</p>
    </div>
  );
}

export default MemberLists;
