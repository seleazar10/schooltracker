// index.js
import React from "react";

import "./style.css"


export function Card(props) {
    return <div className="card mt-5">
    <div className="card-body text-center">
      <h1 cclassName="card-title">Card title</h1>
      <h4 className="card-text">Announcements</h4>
    </div>
    <div>
        {props.children}
    </div>
  </div>;
  }

  export default Card;