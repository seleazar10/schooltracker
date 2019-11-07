import React from "react";

import "./style.css"

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}


export function Col({ size, children }) {
  return (
    <div
      className="teacher col-sm-12 col-md-6 col-lg-6 bg-secondary"
    >
      {children}
    </div>
  );
}


export function Col2({ size, children }) {
  return (
    <div
      className="student col-sm-12 col-md-6 col-lg-6 bg-primary"
    >
      {children}
    </div>
  );
}
