// display the home page that should contain the authentication

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Join/Join.css";
function Contact() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div>
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Log In</h1>
          <div>
            <input
              placeholder="Name..."
              className="joinInput"
              type="text"
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Class Room..."
              className="joinInput mt-20"
              type="text"
              onChange={event => setRoom(event.target.value)}
            />
          </div>
          <Link
            onClick={e => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className={"button mt-20"} type="submit">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
