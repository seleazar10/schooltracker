import React from "react";

import "./style.css"

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea 
      placeholder="Enter a New Announcement"
      className="form-control" 
      rows="3" 
      {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <div className="col-4 mt-3 mb-4">
      <button {...props} className="btn btn-success">
        {props.children}
      </button>
    </div>
  );
}
