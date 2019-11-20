import React from "react";

function Profile({ teacher }) {
  console.log("TEACHER INFO", teacher);
  return (
    <div>
      <h1>Teacher Profile</h1>
      <p>
        <b>Name: </b> {teacher.name}
        <b>Email: </b> {teacher.email}
      </p>
    </div>
  );
}

export default Profile;
