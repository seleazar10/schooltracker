// index.js
import React from "react";

import "./style.css"


export function CardAnnouncements(props) {
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

export function CardAnnModify(props) {
  return <div className="card mt-5 mb-5">
    <div className="card-body text-center">
      <h3 className="card-title">Modify Announcements</h3>
      <h4>Enter the new announcement below:</h4>
    </div>
    <div>
      {props.children}
    </div>
  </div>;
}




