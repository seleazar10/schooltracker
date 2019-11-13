import React from "react";

function UserCard(props) {
  return (
    <div className="card usercard col-2">
      <input
        type="checkbox"
        checked={props.user.selected}
        onChange={event => props.handleChange(props.user.id)}
      ></input>
      <p>{props.user.name}</p>
    </div>
  );
}

export default UserCard;
